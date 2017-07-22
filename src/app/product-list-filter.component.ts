import {Component, EventEmitter, Output} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-product-list-filter',
    templateUrl: './product-list-filter/theme.html',
    styleUrls: ['./product-list-filter/style.css']
})
export class ProductListFilterComponent {
    @Output() public filter = new EventEmitter();
    @Output() public sort = new EventEmitter();
    public filterControl = new FormControl();
    public sortControl = new FormControl();

    constructor() {
        this.filterControl.valueChanges.subscribe(
            value => {
                this.filter.next(value);
            }
        );

        this.sortControl.valueChanges.subscribe(
            value => {
                this.sort.next(value);
            }
        );
    }
}
