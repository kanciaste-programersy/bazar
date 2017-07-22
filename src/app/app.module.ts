import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductListComponent} from './product-list.component';
import {ProductTileComponent} from './product.component';
import {ProductListFilterComponent} from './product-list-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductRepository } from './service/ProductRepository';

@NgModule({
  declarations: [
      AppComponent,
      ProductTileComponent,
      ProductListComponent,
      ProductListFilterComponent
  ],
  imports: [
    BrowserModule,
      ReactiveFormsModule
  ],
  providers: [
      ProductRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
