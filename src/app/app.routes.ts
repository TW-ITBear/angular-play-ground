import { Routes } from '@angular/router';
import { Page1Component } from './article/page1/page1.component';
import { Page2Component } from './article/page2/page2.component';

export const routes: Routes = [
  { path: 'p1', component: Page1Component },
  { path: 'p2', component: Page2Component },
  { path: '**', redirectTo: 'p1'}
];


// todo: lazy loading and parameter with routing
