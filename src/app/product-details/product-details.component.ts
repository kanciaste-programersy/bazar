import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  public id;

  ngOnInit() {
    this.route
        .params
        .subscribe(params => {
            this.id = params['id'];
        });
  }

}
