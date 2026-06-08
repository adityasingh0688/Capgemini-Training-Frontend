import { Routes } from '@angular/router';
import { Home} from './home/home';
import {Profile} from './profile/profile';
import { Abpout } from './abpout/abpout';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'profile', component: Profile},
    {path: 'product/:id', component: Abpout }
];
