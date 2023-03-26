import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product: Product = {
    name: "",
  }
  error: string = "";

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onProductAdd(): void {
    this.productService.createProduct(this.product).toPromise().then((response) => {
      this.router.navigate(["/products"])
    }).catch((e) => {
      this.error = e.error.msg;
    })
  }

}
