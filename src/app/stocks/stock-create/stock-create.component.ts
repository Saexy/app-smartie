import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/products/shared/product.model';
import { ProductService } from 'src/app/products/shared/product.service';
import { Stock } from '../shared/stock.model';
import { StockService } from '../shared/stock.service';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {

  products: Product[] = [];
  stock: Stock = {
    product_id: 0,
    name: "",
  }
  error: string = "";
  constructor(private stockService: StockService,
              private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().toPromise().then((response) => {
      this.products = response || [];
    })
  }

  onStockCreate(): void {
    this.stockService.createStock(this.stock).toPromise().then((response) => {
      this.router.navigate(["/stocks"])
    }).catch((e) => {
      this.error = e.error.msg;
    })
  }

  onStockProductChange(e: any): void{
    this.stock.product_id = e;
  }

}
