import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.interface';

@Pipe({name: 'productsFilter'})
export class ProductsFilterPipe implements PipeTransform {
  transform(allProducts: Product[]) {
    return allProducts.filter(product => product.promoted);
  }
}