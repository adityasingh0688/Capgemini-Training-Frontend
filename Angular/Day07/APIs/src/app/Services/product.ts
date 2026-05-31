import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productdt } from './productInterface';

@Injectable({
  providedIn: 'root',
})
export class Product {
  constructor(private http: HttpClient){};

  getProducts() {
    return this.http.get<Productdt[]>('https://fakestoreapi.com/products');
  }
}
