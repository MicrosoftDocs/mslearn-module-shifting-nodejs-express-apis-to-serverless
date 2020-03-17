import { Routes } from '@angular/router';
import { NotFoundComponent } from './core';
import { AboutComponent } from './about.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'vacations' },
  {
    path: 'vacations',
    loadChildren: () =>
      import('./vacations/vacations.module').then(m => m.VacationsModule)
  },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent }
];
