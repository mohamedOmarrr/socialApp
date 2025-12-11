import { Routes } from '@angular/router';
import { logOutGuard } from './core/guards/log-out-guard'
export const routes: Routes = [
  { path: '', redirectTo: 'signUp', pathMatch: 'full' },

  { 
    path: 'home',
    loadComponent: () => import('./features/home/home').then(m => m.Home),
    title: 'Home Page',
    canActivate: [logOutGuard] 
  },
  { 
    path: 'profile',
    loadComponent: () => import('./features/profile/profile').then(m => m.Profile),
    title: 'Products Page',
    canActivate: [logOutGuard] 
  },
  { 
    path: 'signUp',
    loadComponent: () => import('./features/register/register').then(m => m.Register),
    title: 'SignUp Page',
   
  },
  { 
    path: 'logIn',
    loadComponent: () => import('./features/login/login').then(m => m.Login),
    title: 'Login Page',
    
  },
  { 
    path: 'reset',
    loadComponent: () => import('./features/reset/reset').then(m => m.Reset),
    title: 'resetPasword Page'
  },

  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then(m => m.NotFound)
  }
];

