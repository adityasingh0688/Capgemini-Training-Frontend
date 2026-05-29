import { Component, Input } from '@angular/core';
import { ProductListComponent } from '../product-list-component/product-list-component';

import { CartSummaryComponent } from '../cart-summary-component/cart-summary-component';

import { DiscountPanelComponent } from '../discount-panel-component/discount-panel-component';
import { Product } from '../models';

@Component({
  selector: 'app-shopping-cart-component',
  imports: [ProductListComponent, CartSummaryComponent, DiscountPanelComponent],
  templateUrl: './shopping-cart-component.html',
  styleUrl: './shopping-cart-component.css',
})
export class ShoppingCartComponent {
  @Input() products: Product[] = [];
}
