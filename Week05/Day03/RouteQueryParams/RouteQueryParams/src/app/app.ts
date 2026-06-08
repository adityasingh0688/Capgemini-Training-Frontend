import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RouteQueryParams');
  products = [
    {
      id: 1,
      name: 'Laptop',
      price: 50000,
      description: 'Gaming Laptop'
    },
    {
      id: 2,
      name: 'Mobile',
      price: 25000,
      description: 'Android Mobile'
    },
    {
      id: 3,
      name: 'Headphones',
      price: 3000,
      description: 'Wireless Headphones'
    }
  ];
}
