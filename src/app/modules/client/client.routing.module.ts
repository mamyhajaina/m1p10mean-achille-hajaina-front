import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { NgModule } from '@angular/core';
import { RendezVousComponent } from './pages/rendez-vous/rendez-vous.component';

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
