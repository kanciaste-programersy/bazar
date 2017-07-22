import {ProductInteface} from './product.interface';

export class Product implements ProductInteface {
    static idCount = 0;
    id: number;
    name: string;
    price: number;
    desc: string;
    image: string;
    promoted: boolean;

    constructor(image: string, name: string, desc: string, price: number, promoted: boolean) {
        Product.idCount++;
        this.id = Product.idCount;
        this.name = name;
        this.image = (image + '?rand=' + this.id);
        this.desc = desc;
        this.price = price;
        this.promoted = promoted;
    }
}
