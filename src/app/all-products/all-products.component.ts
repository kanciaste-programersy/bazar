import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  constructor() { }

  @Input() public products;

  ngOnInit() {
  }

}
