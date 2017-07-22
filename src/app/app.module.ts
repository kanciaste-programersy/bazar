import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { AllProductsComponent } from './all-products/all-products.component';
import {ReactiveFormsModule} from '@angular/forms';

import { ProductsFilterPipe } from './ProductsFilterPipe';
import { SorterComponent } from './sorter/sorter.component';
import {ProductRepository} from './product/product.repository';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AllProductsComponent,
    ProductsFilterPipe,
    SorterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [ProductRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
