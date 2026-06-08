import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
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

  selectedProduct: any;
  showDetails = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    // ROUTE PARAM
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.selectedProduct =
      this.products.find(product => product.id === id);

    // QUERY PARAM
    this.route.queryParams.subscribe(params => {
      this.showDetails = params['showDetails'] === 'true';
    });

  }
}
