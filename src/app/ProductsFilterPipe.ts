import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.interface';

@Pipe({name: 'productsFilter'})
export class ProductsFilterPipe implements PipeTransform {
  transform(allProducts: Product[], onlyPromoted: boolean) {
    return allProducts.filter(
      product => { return onlyPromoted ? product.promoted : true; }
    );
  }
}