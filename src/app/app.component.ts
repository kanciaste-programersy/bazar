import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public productsList = [];

    constructor() {
        for (let i = 0; i < 15; i++) {
            this.productsList.push(new Product('Product number ' + i));
        }
    }
}

interface ProductInteface {
    name: string;
}

class Product implements ProductInteface {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}
