import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './manager.component';

const routes: Routes = [
  {
    path: '',
    component: ManagerComponent,
    children: [
      // {
      //   path: 'profil', // child route path
      //   component: ProfilComponent, // child route component that the router renders
      // },
      {
        path: '',
        redirectTo: 'profil',
        pathMatch: 'full'
      },
      { path: '**', redirectTo: 'profil', pathMatch: 'full' },
    ],
  },
];

export const ManagerRoutes = RouterModule.forChild(routes);
