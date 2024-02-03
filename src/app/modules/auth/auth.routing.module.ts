import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login', // child route path
        component: LoginComponent, // child route component that the router renders
      },
      {
        path: 'sign-in', // child route path
        component: SignInComponent, // child route component that the router renders
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];

export const AuthRoutes = RouterModule.forChild(routes);
