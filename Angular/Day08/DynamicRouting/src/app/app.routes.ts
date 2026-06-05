import { Routes } from '@angular/router';
import { ProductDetails } from './components/product-details/product-details';
import { ProductList } from './components/product-list/product-list';

export const routes: Routes = [
    {
        path: '',
        component: ProductList
    },
    {
        path: 'details/:id',
        component: ProductDetails
    }
];
