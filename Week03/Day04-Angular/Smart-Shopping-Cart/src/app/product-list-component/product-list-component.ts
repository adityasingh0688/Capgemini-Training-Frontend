import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductItemComponent } from '../product-item-component/product-item-component';
import { Product } from '../models';

@Component({
  selector: 'app-product-list-component',
  imports: [ProductItemComponent],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css',
})
export class ProductListComponent {
  @Input () products: Product[] = [];

  @Output() productSelected = new EventEmitter<Product>();

  handleAddToCart(product:Product){
    console.log("Product List Component");
    console.log(product);
    this.productSelected.emit(product);
  }
}
