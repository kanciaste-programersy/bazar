import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.interface';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  @Input() public products: Array<Product>;
  public promo = false;

  
  constructor() { }

  ngOnInit() {
  }

  handleSorted(productsSorted) {
    this.products = productsSorted;
  }

  newList(){
    this.promo=!this.promo
    console.log(this.promo)
}

}
