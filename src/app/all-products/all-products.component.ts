import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.interface';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  @Input() public products: Array<Product>;
  public collection;
  public promo = false;
  public searchterm = new FormControl();

  
  constructor() { 
     this.searchterm.valueChanges.subscribe(value => {
      this.collection = this.products.filter(
          book => { if(
            this.searchCond(book,'name') ||
            this.searchCond(book,'description')
          )
          return book});
    
  
});
  }

  ngOnInit() {
    this.collection = this.products
  }

  newList(){
    this.promo=!this.promo
    console.log(this.promo)
}

searchCond(ob, parameter){
  if(ob[parameter].substr(0,this.searchterm.value.length) === this.searchterm.value)
  return true
}

}
