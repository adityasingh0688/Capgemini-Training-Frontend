import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { PageNotFound } from './page-not-found/page-not-found';
import { Child2 } from './child2/child2';
import { Child1 } from './child1/child1';

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
    component: About,
    children: [
      {
        path: 'child1',
        component: Child1,
      },
      {
        path: 'child2',
        component: Child2,
      },
    ],
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
