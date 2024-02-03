import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { PriseRendezVousComponent } from './components/prise-rendez-vous/prise-rendez-vous.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'priseRendezVous', // child route path
        component: PriseRendezVousComponent, // child route component that the router renders
      },
      {
        path: '',
        redirectTo: 'priseRendezVous',
        pathMatch: 'full'
      },
      { path: '**', redirectTo: 'priseRendezVous', pathMatch: 'full' },
    ],
  },
];

export const ClientRoutes = RouterModule.forChild(routes);
