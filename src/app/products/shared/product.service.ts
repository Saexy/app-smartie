import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  options = { 
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${window.localStorage.getItem("token")}`
    }
  }

  constructor(private httpClient: HttpClient) { }

  createProduct(product: Product): Observable<any> {
    return this.httpClient.post("http://localhost:3333/products", product, this.options);
  }

  getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:3333/products", this.options);
  }

  getProduct(id: number): Observable<Product>{
    return this.httpClient.get<Product>(`http://localhost:3333/products/${id}`, this.options);
  }

  deleteProduct(id?: number): Observable<any>{
    return this.httpClient.delete(`http://localhost:3333/products/${id}`, this.options)
  }

  updateProduct(product: Product): Observable<any> {
    return this.httpClient.put(`http://localhost:3333/products/${product.id}`, product, this.options)
  }

}
