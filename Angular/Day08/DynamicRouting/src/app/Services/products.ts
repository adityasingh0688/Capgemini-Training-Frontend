import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductResponse } from './productInterface';

@Injectable({
  providedIn: 'root'
})
export class Products {

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<ProductResponse>('https://dummyjson.com/products');
  }
}