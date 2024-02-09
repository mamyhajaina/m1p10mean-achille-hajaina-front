import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { NgModule } from '@angular/core';
import { RendezVousComponent } from './pages/rendez-vous/rendez-vous.component';
import { HistoriqueRendezVousComponent } from './pages/historique-rendez-vous/historique-rendez-vous.component';
import { PaimentComponent } from './pages/paiment/paiment.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'priseRendezVous', // child route path
        component: RendezVousComponent, // child route component that the router renders
      },
      {
        path: 'historiqueRendezVous', // child route path
        component: HistoriqueRendezVousComponent, // child route component that the router renders
      },
      {
        path: 'paiement', // child route path
        component: PaimentComponent, // child route component that the router renders
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
