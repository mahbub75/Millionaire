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
      import('./auth/register/register.component')
        .then(m => m.RegisterComponent)
  },
  {
    path:'login',
    loadComponent: () =>
      import('./auth/login/login.component')
        .then(m => m.LoginComponent)
  },
  {
    path:'quiz',
    loadComponent: () =>
      import('./quiz/quiz.component')
        .then(m => m.QuizComponent)
  }
];
