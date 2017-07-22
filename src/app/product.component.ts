import {Component, Input} from '@angular/core';
import {ProductInteface} from './product/product.interface';

@Component({
    selector: 'app-product-tile',
    templateUrl: './product/product.html',
    styleUrls: ['./product/product.css']
})
export class ProductTileComponent {

    @Input() public product: ProductInteface;
}
