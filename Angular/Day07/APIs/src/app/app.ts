import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Productdt } from './Services/productInterface';
import { Product } from './Services/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('APIs');
  constructor(private productService: Product){}

  apiData=signal<Productdt[] | null>(null);
  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.apiData.set(data);
    });
  }
}
