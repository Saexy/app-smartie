import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { environment } from 'src/environments/environment';

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
    return this.httpClient.post(`${environment.api_url}/products`, product, this.options);
  }

  getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${environment.api_url}/products`, this.options);
  }

  getProduct(id: number): Observable<Product>{
    return this.httpClient.get<Product>(`${environment.api_url}/products/${id}`, this.options);
  }

  deleteProduct(id?: number): Observable<any>{
    return this.httpClient.delete(`${environment.api_url}/products/${id}`, this.options)
  }

  updateProduct(product: Product): Observable<any> {
    return this.httpClient.put(`${environment.api_url}/products/${product.id}`, product, this.options)
  }

}
