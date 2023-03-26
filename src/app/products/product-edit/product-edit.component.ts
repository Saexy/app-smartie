import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = {
    id: 0,
    name: "",
    created_at: "",
  }
  error: string = "";

  constructor(private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.onProductLoad();
  }

  onProductLoad(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.productService.getProduct(id).toPromise().then((response) => {
      this.product = response || new Product();
    }).catch((e) => {
      this.router.navigate(["/products"])
    })
  }

  onProductUpdate(): void {
    this.productService.updateProduct(this.product).toPromise().then((response) => {
      this.router.navigate(["/products"])
    }).catch((e) => {
      this.error = e.error.msg;
    })
  }

}
