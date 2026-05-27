// import { Component, EventEmitter, Input, Output } from '@angular/core';

// import { Product } from '../models/product.model';

// import { CartItem } from '../models/cart-item.model';

// import { CheckoutData } from '../models/checkout-data.model';

// import { ProductList } from '../product-list/product-list';

// import { CartSummary } from '../cart-summary/cart-summary';

// import { DiscountPanel } from '../discount-panel/discount-panel';

// @Component({
//   selector: 'app-shopping-cart',
//   standalone: true
//   imports: [
//     ProductList,
//     CartSummary,
//     DiscountPanel
//   ],
//   templateUrl: './shopping-cart.html',
//   styleUrl: './shopping-cart.css'
// })
// export class ShoppingCart {

//   @Input()
//   products: Product[] = [];


//   @Output()
//   checkoutCompleted = new EventEmitter<CheckoutData>();


//   @Output()
//   cartWarning = new EventEmitter<string>();


//   cartItems: CartItem[] = [];


//   addToCart(product: Product) {

//     console.log('ShoppingCartComponent');

//     if(product.stock <= 0) {
//       return;
//     }

//     const existingItem = this.cartItems.find(
//       item => item.product.id === product.id
//     );

//     if(existingItem) {

//       existingItem.quantity++;

//     } else {

//       this.cartItems.push({
//         product: product,
//         quantity: 1
//       });

//     }

//     product.stock--;

//   }

// }