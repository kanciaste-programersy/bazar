import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductComponent implements OnInit {

  constructor() { }
  
  @Input() public product;
  @Input() public index;

  ngOnInit() {
  }

  public onBuy (button) {
      alert("Dziękujemy za zakupu. Właśnie wyczyściliśmy Twoją kartę kredytową.");
  }

}
