import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/estoque/estoque.component').then(m => m.EstoqueComponent)
  }

];
