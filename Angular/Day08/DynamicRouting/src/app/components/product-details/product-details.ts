import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../Services/products';
import { Product } from '../../Services/productInterface';


@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  constructor(private route: ActivatedRoute,private products: Products) {}
   Product = signal<Product | null>(null);

  ngOnInit() {
    let productId = this.route.snapshot.paramMap.get('id');
    this.products.getProducts().subscribe((data) => {
      data.products.filter((item) => {
        if (item.id.toString() == productId) {
          this.Product.set(item);
        }
      })
    });
  }

}
