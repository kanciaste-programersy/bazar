import { Component } from '@angular/core';
import { Product } from './product.interface';
import { ProductImpl } from './product.impl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

public products: Array<Product> = [
        new ProductImpl('fidget spinner', 10.00, 'popularne w gimnazjum', true, 'default.png'),
        new ProductImpl('piłka', 20.00, 'Euro 2012', false, 'ball.jpg'),
        new ProductImpl('pizza', 27.00, 'Funghi na podójnym cieście. Dodatkowy ser i sos czosnkowy dla studentów GRATIS!', true, 'default.png'),
        new ProductImpl('skarpetki', 6.00, 'Czarno-niebieskie skarpetki do garnituru', false, 'socks.gif')
    ];

  title = 'app';
}
