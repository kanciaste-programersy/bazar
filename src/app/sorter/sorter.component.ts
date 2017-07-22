import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.interface';

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.css']
})
export class SorterComponent implements OnInit {

  constructor() { }

  @Input() public products : Array<Product>;
  @Output() public productsSorted = new EventEmitter<Array<Product>>();

  public field;
  public direction;

  ngOnInit() {
    
  }

  sort(field, direction) {
    this.field = field;
    this.direction = direction;
    this.apply();
  }

  apply() {
    this.products = this.products.sort((a:Product, b:Product) => (a.price - b.price) * this.direction);
    this.productsSorted.emit(this.products);
  }

}
