import {Component} from '@angular/core';
import {Product} from './product/product.class';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public products = [];
    public filteredProducts = [];
    public promoted = [];

    constructor() {
        for (let i = 0; i < 15; i++) {
            this.products.push(
                new Product(
                    'http://lorempixel.com/250/250/?rand=' + i,
                    'Product number ' + i,
                    'jakiś tam opis ' + 1,
                    parseFloat((Math.random() * 1000).toFixed(2)),
                    (Boolean)(Math.random() * 2)
                )
            );
        }
        this.filteredProducts = this.products;
        this.promoted.push(this.products[Math.floor(Math.random() * this.products.length)]);
        this.promoted.push(this.products[Math.floor(Math.random() * this.products.length)]);
        this.promoted.push(this.products[Math.floor(Math.random() * this.products.length)]);
        this.promoted.push(this.products[Math.floor(Math.random() * this.products.length)]);
    }

    public onFilter(event) {
        this.filteredProducts = this.products.filter(
            (value, index, opts) => {
                return value.name.includes(event) ||
                    value.price.toString().includes(event) ||
                    value.desc.includes(event)
                    ;
            }
        );
    }
}


