import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { AllProductsComponent } from './all-products/all-products.component';

import { ProductsFilterPipe } from './ProductsFilterPipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AllProductsComponent,
    ProductsFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
