import {Product} from './product.interface';

export class ProductImpl implements Product {
    name: string;
    price: number;
    description: string;
    image: string;
    promoted: boolean;

    constructor(name: string, price: number, description: string, promoted: boolean, image: string) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.price = price;
        this.promoted = promoted;
    }
}