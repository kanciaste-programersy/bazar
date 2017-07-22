import {Component} from '@angular/core';
import {Product} from './product/product.class';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public products = [];
    public promoted = [];

    constructor() {
        for (let i = 0; i < 15; i++) {
            this.products.push(
                new Product(
                    'http://lorempixel.com/250/250/?rand=' + i,
                    'Product number ' + i,
                    'jakiś tam opis ' + 1,
                    20.5,
                    (Boolean)(Math.random() * 2)
                )
            );
        }
        let index = Math.random() * this.products.length;
        this.promoted.push(this.products[Math.floor(Math.random() * this.products.length)]);
        this.promoted.push(this.products[Math.floor(Math.random() * this.products.length)]);
        this.promoted.push(this.products[Math.floor(Math.random() * this.products.length)]);
        this.promoted.push(this.products[Math.floor(Math.random() * this.products.length)]);
    }
}

