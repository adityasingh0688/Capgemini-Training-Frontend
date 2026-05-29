import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart-component/shopping-cart-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ShoppingCartComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Smart-Shopping-Cart');

  products = [
    { id: 1, name: 'Phone', price: 20000, stock:5,category:'Electronics' },
    { id: 2, name: 'Laptop', price: 50000, stock:3,category:'Electronics' },
    { id: 3, name: 'Headphones', price: 2000, stock:10,category:'Electronics' },
    { id: 4, name: 'Shoes', price: 3000, stock:7,category:'Fashion' },
    { id: 5, name: 'Watch', price: 10000, stock:4,category:'Fashion' }
  ]

}
