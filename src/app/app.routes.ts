import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch: 'full',
  },
  {
    path:'register',
    loadComponent: () =>
      import('./register/register.component')
        .then(m => m.RegisterComponent)
  },
  {
    path:'login',
    loadComponent: () =>
      import('./login/login.component')
        .then(m => m.LoginComponent)
  }
];
