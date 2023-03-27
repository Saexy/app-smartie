import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from '../shared/stock.model';
import { StockService } from '../shared/stock.service';

@Component({
  selector: 'app-stock-add',
  templateUrl: './stock-add.component.html',
  styleUrls: ['./stock-add.component.css']
})
export class StockAddComponent implements OnInit {

  stock: number = 0;
  quantity: number = 0;
  error: string = "";
  stocks: Stock[] = [];
  constructor(private stockService: StockService,
              private router: Router) { }

  ngOnInit(): void {
    this.stockService.getStocks().toPromise().then((response) => {
      this.stocks = response || [];
    })
  }

  onStockAdd(): void {
    this.stockService.addStock(this.stock, this.quantity).toPromise().then((response) => {
      this.router.navigate(["/stocks"])
    }).catch((e) => {
      this.error = e.error.msg;
    })
  }

  onStockChange(e: any): void{
    this.stock = e;
  }

}
