import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../models';

@Component({
  selector: 'app-cart-summary-component',
  imports: [],
  templateUrl: './cart-summary-component.html',
  styleUrl: './cart-summary-component.css',
})
export class CartSummaryComponent {
  subTotal: number = 0;
  @Output() warningEvent = new EventEmitter<string>();

  checkTotal() {
    if(this.subTotal>500){
      this.warningEvent.emit('Total exceeds $500! Consider removing some items.');
    }
  }
  @Input()cartItems: CartItem[] = [];

  @Output()removeItemFromCart = new EventEmitter<CartItem>();

removeItem(item: CartItem){
  this.removeItemFromCart.emit(item);
}
get subtotal(): number {

  return this.cartItems.reduce(
    (total, item) =>
      total + item.product.price * item.quantity,
    0
  );

}
}