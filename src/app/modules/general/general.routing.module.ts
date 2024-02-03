import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './general.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
    children: [
      {
        path: 'home', // child route path
        component: HomeComponent, // child route component that the router renders
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

export const GeneralRoutes = RouterModule.forChild(routes);
