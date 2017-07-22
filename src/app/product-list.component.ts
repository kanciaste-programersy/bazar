import {Component, Input} from '@angular/core';
import {ProductInteface} from './product/product.interface';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list/list.html',
    styleUrls: ['./product-list/style.css']
})
export class ProductListComponent {
    @Input() public products: Array<ProductInteface>;
    @Input() public filtering: Boolean = false;
}
