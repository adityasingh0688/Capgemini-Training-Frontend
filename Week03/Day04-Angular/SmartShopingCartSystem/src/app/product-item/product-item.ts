// import { Component, EventEmitter, Input, Output } from '@angular/core';

// import { Product } from '../models/product.model';

// @Component({
//   selector: 'app-product-item',
//   imports: [],
//   templateUrl: './product-item.html',
//   styleUrl: './product-item.css'
// })
// export class ProductItem {

//   @Input({ required: true })
//   product!: Product;


//   @Output({ alias: 'productSelected' })
//   addToCart = new EventEmitter<Product>();


//   onAddToCart() {

//     console.log('ProductItemComponent');

//     this.addToCart.emit(this.product);

//   }

// }