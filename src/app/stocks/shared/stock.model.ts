import { Product } from "src/app/products/shared/product.model";

export class Stock {
    id?: number;
    product_id?: number;
    product_name?: string;
    name: string = "";
    quantity?: number;
    created_at?: string;
}