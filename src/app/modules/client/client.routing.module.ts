import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { PriseRendezVousComponent } from './components/prise-rendez-vous/prise-rendez-vous.component';
import { NgModule } from '@angular/core';

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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutes { }
