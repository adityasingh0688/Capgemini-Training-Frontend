import { Component, Input } from '@angular/core';
import { ProductListComponent } from '../product-list-component/product-list-component';

import { CartSummaryComponent } from '../cart-summary-component/cart-summary-component';

import { DiscountPanelComponent } from '../discount-panel-component/discount-panel-component';
import { CartItem, Product } from '../models';

@Component({
  selector: 'app-shopping-cart-component',
  imports: [ProductListComponent, CartSummaryComponent, DiscountPanelComponent],
  templateUrl: './shopping-cart-component.html',
  styleUrl: './shopping-cart-component.css',
})
export class ShoppingCartComponent {
  @Input() products: Product[] = [];

    cartItems: CartItem[] = [];

  addItemToCart(product: Product) {
    console.log('Adding product to cart:', product);
    if(product.stock > 0){
      product.stock -= 1;
    } else {
      console.log('Sorry, this product is out of stock!');
    }
    if(product.stock >= 0){
      const existingCartItem = this.cartItems.find(item => item.product.id === product.id);
      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        this.cartItems.push({ product: product, quantity: 1 });
      }
    }
  }

  showWarning(message: string) {
    console.log(message);
  }

  removeItemFromCart(item: CartItem) {
    console.log('Removing product from cart:', item.product);
    item.product.stock++;
    if(item.quantity > 1){
      item.quantity -= 1;
    } else {
      this.cartItems = this.cartItems.filter(cartItem => cartItem.product.id !== item.product.id);
    }
  }
}
