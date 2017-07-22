import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

public products: Array<Object> = [
        {name: 'fidget spinner', price: 10.00, description:'popularne w gimnazjum', promoted:true },
        {name: 'piłka', price: 20.00, description:'Euro 2012', promoted:false},
        {name: 'pizza', price: 27.00, description:'Funghi na podójnym cieście. Dodatkowy ser i sos czosnkowy dla studentów GRATIS!', promoted:true},
        {name: 'skarpetki', price: 6.00, description:'Czarno-niebieskie skarpetki do garnituru', promoted:false}
    ];

  title = 'app';
}
