import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stock } from './stock.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  options = { 
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${window.localStorage.getItem("token")}`
    }
  }

  constructor(private httpClient: HttpClient) { }

  getStocks(): Observable<Stock[]> {
    return this.httpClient.get<Stock[]>(`${environment.api_url}/stocks`, this.options);
  }

  getStock(id: number): Observable<Stock>{
    return this.httpClient.get<Stock>(`${environment.api_url}/stocks/${id}`, this.options);
  }

  deleteStock(id?: number): Observable<any>{
    return this.httpClient.delete(`${environment.api_url}/stocks/${id}`, this.options)
  }

  createStock(stock: Stock): Observable<any> {
    return this.httpClient.post(`${environment.api_url}/stocks`, stock, this.options);
  }
  
  updateStock(stock: Stock): Observable<any> {
    return this.httpClient.put(`${environment.api_url}/stocks/${stock.id}`, stock, this.options)
  }

  addStock(id: number, quantity: number): Observable<any> {
    return this.httpClient.post(`${environment.api_url}/stocks/add/${id}`, { quantity }, this.options);
  }
  
  removeStock(id: number, quantity: number): Observable<any> {
    return this.httpClient.post(`${environment.api_url}/stocks/remove/${id}`, { quantity }, this.options);
  }

}
