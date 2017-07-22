import { Component } from '@angular/core';
import { Product } from './product.interface';
import {ProductRepository} from './product/product.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    public products: Array<Product> = [];

    constructor(productRepository: ProductRepository) {
        this.products = productRepository.getProducts();
    }
}
