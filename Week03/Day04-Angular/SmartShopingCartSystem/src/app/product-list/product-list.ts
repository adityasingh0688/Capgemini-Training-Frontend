// import { CommonModule } from '@angular/common';

// import { Component, EventEmitter, Input, Output } from '@angular/core';

// import { Product } from '../models/product.model';

// import { ProductItem } from '../product-item/product-item';

// @Component({
//   selector: 'app-product-list',
//   imports: [CommonModule, ProductItem],
//   templateUrl: './product-list.html',
//   styleUrl: './product-list.css'
// })
// export class ProductList {

//   @Input()
//   products: Product[] = [];


//   @Output()
//   productSelected = new EventEmitter<Product>();


//   handleProduct(product: Product) {

//     console.log('ProductListComponent');

//     this.productSelected.emit(product);

//   }

// }