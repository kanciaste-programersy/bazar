import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductComponent implements OnInit {

  constructor() { }
  
  @Input() public product;
  @Input() public promoted;
  @Input() public index;

  ngOnInit() {
  }

}
