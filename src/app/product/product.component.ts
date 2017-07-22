import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductComponent implements OnInit {

  constructor(private router: Router) {}
  
  @Input() public product: Product;
  @Input() public id = 1;

  ngOnInit() {
  }

  public onBuy (button) {
      button.textContent = "KUPIONE";
      //alert("Dziękujemy za zakupu. Właśnie wyczyściliśmy Twoją kartę kredytową.");
      this.router.navigate(['details', this.product.name]);
      
  }

}
