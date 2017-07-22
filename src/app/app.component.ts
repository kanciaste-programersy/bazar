import {Component} from '@angular/core';
import {ProductRepository} from './service/ProductRepository';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public filteredProducts = [];
    public promoted = [];
    private filterText = '';
    private productRepository: ProductRepository;

    constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository;
        this.filteredProducts = this.productRepository.getProducts();
        this.promoted = this.productRepository.getPromoted();

    }

    public onFilter(event) {
        this.filterText = event;
        this.filteredProducts = this.productRepository.search(this.filterText);
    }

    public onSort(event) {
        this.filteredProducts = this.productRepository.search(this.filterText, event);
    }
}


