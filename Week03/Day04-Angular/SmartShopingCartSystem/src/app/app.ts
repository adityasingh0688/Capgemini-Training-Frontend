import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { Product, CheckoutData } from './models/models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ShoppingCartComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {

  totalRevenue = 0;
  totalItemsSold = 0;

  warningMessage = '';

  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 700,
      stock: 5,
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Phone',
      price: 400,
      stock: 3,
      category: 'Electronics'
    },
    {
      id: 3,
      name: 'Headphones',
      price: 100,
      stock: 10,
      category: 'Accessories'
    }
  ];

  handleCheckout(data: CheckoutData) {

    console.log('Checkout Success', data);

    this.totalRevenue += data.total;

    data.items.forEach(item => {
      this.totalItemsSold += item.quantity;
    });
  }

  handleWarning(message: string) {
    this.warningMessage = message;
  }
}