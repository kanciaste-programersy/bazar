import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

public products: Array<Object> = [
        {nazwa: 'fidget spinner', cena: 10.00, opis:'popularne w gimnazjum' },
        {}
    ];

  title = 'app';
}
