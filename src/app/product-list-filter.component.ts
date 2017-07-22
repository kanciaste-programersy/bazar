import {Component, EventEmitter, Output} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-product-list-filter',
    templateUrl: './product-list-filter/theme.html',
    styleUrls: ['./product-list-filter/style.css']
})
export class ProductListFilterComponent {
    @Output() public filter = new EventEmitter();
    public myInput = new FormControl();

    constructor() {
        this.myInput.valueChanges.subscribe(
            value => {
                this.filter.next(value);
            }
        );
    }
}
