import {Product} from '../product/product.class';

export class ProductRepository {

    public products = [];

    constructor() {
        for (let i = 0; i < 15; i++) {
            this.products.push(
                new Product(
                    'http://lorempixel.com/250/250/',
                    'Product number ' + i,
                    'jakiś tam opis ' + 1,
                    parseFloat((Math.random() * 1000).toFixed(2)),
                    (Boolean)(Math.random() * 2)
                )
            );
        }
    }

    public getProducts() {
        return this.products;
    }

    public getPromoted() {
        return [
            this.products[Math.floor(Math.random() * this.products.length)],
            this.products[Math.floor(Math.random() * this.products.length)],
            this.products[Math.floor(Math.random() * this.products.length)],
            this.products[Math.floor(Math.random() * this.products.length)]
        ];
    }

    public search(text, sort = null) {
        return this.products.filter((value, index, opts) => {
            return value.name.includes(text) ||
                value.price.toString().includes(text) ||
                value.desc.includes(text)
                ;
        }).sort(
            (a, b) => {
                switch (sort) {
                    case 'price-asc':
                        return a.price === b.price ? 0 : (a.price > b.price ? 1 : -1) ;
                    case 'price-desc':
                        return a.price === b.price ? 0 : (a.price < b.price ? 1 : -1) ;
                    default:
                        return a.id === b.id ? 0 : (a.id > b.id ? 1 : -1) ;
                }
            }
        );
    }

}