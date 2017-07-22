import {ProductInteface} from './product.interface';

export class Product implements ProductInteface {
    name: string;
    price: number;
    desc: string;
    image: string;
    promoted: boolean;

    constructor(image: string, name: string, desc: string, price: number, promoted: boolean) {
        this.name = name;
        this.image = image;
        this.desc = desc;
        this.price = price;
        this.promoted = promoted;
    }
}
