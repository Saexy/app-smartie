import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/products/shared/product.model';
import { ProductService } from 'src/app/products/shared/product.service';
import { Stock } from '../shared/stock.model';
import { StockService } from '../shared/stock.service';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {

  products: Product[] = [];
  stock: Stock = {
    id: 0,
    product_id: 0,
    product_name: "",
    name: "",
    quantity: 0,
    created_at: "",
  }
  error: string = "";
  constructor(private stockService: StockService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.onStockLoad();
  }

  onStockLoad(): void{
    const { id } = this.activatedRoute.snapshot.params;
    this.stockService.getStock(id).toPromise().then((response) => {
      this.stock = response || new Stock();
    }).catch((e) => {
      this.router.navigate(["/stocks"])
    })
  }

  onStockUpdate(): void {
    this.stockService.updateStock(this.stock).toPromise().then((response) => {
      this.router.navigate(["/stocks"])
    }).catch((e) => {
      this.error = e.error.msg;
    })
  }

}
