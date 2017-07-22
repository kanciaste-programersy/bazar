import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

public products: Array<Object> = [
        {name: 'fidget spinner', price: 10.00, description:'popularne w gimnazjum', promoted:true },
        {name: 'piłka', price: 20.00, description:'Euro 2012', promoted:false}
    ];

  title = 'app';
}
