import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.onProductsLoad();
  }

  onProductsLoad(): void{
    this.productService.getProducts().toPromise().then((response) => {
      this.products = response || [];
    })
  }

  onProductDelete(id?: number): void {
    this.productService.deleteProduct(id).toPromise().then((response) => {
      this.onProductsLoad();
    }).catch((e) => {
      alert(e.error.msg);
    })
  }

}
