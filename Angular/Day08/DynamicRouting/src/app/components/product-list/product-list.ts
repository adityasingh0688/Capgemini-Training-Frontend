import { Component, signal } from '@angular/core';
import { Product } from '../../Services/productInterface';
import { Products } from '../../Services/products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  constructor(private productService: Products) {}
  apiData = signal<Product[]>([]);
  
  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.apiData.set(data.products);
    });
  }
}
