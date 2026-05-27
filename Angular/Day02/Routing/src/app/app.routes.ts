import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    {
    path: '',
    component: Home
  },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full' // This is used to match the full path, otherwise it will match the empty path and always show the Home component
  // },

  {
    path: 'about',
    component: About
  },

  {
    path: 'contact',
    component: Contact
  },
  {
    path: '**',
    component: PageNotFound
  }
];
