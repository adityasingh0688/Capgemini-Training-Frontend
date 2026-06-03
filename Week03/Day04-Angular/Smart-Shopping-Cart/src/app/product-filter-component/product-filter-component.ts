import { Component, EventEmitter, Input, Output,} from '@angular/core';
import { Product } from '../models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-filter-component',
  imports: [FormsModule],
  templateUrl: './product-filter-component.html',
  styleUrl: './product-filter-component.css',
})
export class ProductFilterComponent {
  @Input() products: Product[] = [];
  @Output() filterChanged = new EventEmitter<any>();

  searchTerm: string = '';
  activeCategory: string = 'All';
  minPrice: number = 0;
  maxPrice: number = 50000;
  selectedSortOrder: string = 'name-asc';
  showInStockOnly: boolean = false;
  
  categories: string[] = ['All', 'Electronics', 'Clothing', 'Books', 'Home'];

  applyFilters() {
 this.filterChanged.emit({
   searchTerm:this.searchTerm,
   category:this.activeCategory,
   minPrice:this.minPrice,
   maxPrice:this.maxPrice,
   sort:this.selectedSortOrder,
   stock:this.showInStockOnly
 });
}
}
