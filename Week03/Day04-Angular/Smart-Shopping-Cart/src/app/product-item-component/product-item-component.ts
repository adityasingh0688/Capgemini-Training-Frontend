import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CartItem, Product } from '../models';

@Component({
  selector: 'app-product-item-component',
  imports: [],
  templateUrl: './product-item-component.html',
  styleUrl: './product-item-component.css',
})
export class ProductItemComponent {
 @Input({required:true})product!:Product;

 @Output() 
 addToCart=new EventEmitter<Product>();

 addProduct(){
  console.log("Product Item Component");
  this.addToCart.emit(this.product);
 }

 
}
