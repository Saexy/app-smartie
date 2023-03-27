import { Component, OnInit } from '@angular/core';
import { Stock } from '../shared/stock.model';
import { StockService } from '../shared/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  stocks: Stock[] = [];

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.onStocksLoad();
  }

  onStocksLoad(): void{
    this.stockService.getStocks().toPromise().then((response) => {
      this.stocks = response || [];
    })
  }

  onStockDelete(id?: number): void {
    this.stockService.deleteStock(id).toPromise().then((response) => {
      this.onStocksLoad();
    })
  }

}
