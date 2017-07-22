import { Component } from '@angular/core';
import { Product } from './product.interface';
import {ProductRepository} from './product/product.repository';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    public products: Array<Product> = [];

    /*constructor(productRepository: ProductRepository) {
        this.products = productRepository.getProducts();
    }
*/
    constructor (http: Http) {
        //3/ 2. And we can use it to fetch data
        http.get('./../assets/products.json')
            .map(res => res.json())
            .subscribe(todos =>{ this.products = todos});
    }


}
