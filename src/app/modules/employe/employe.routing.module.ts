import { Routes, RouterModule } from '@angular/router';
import { EmployeComponent } from './employe.component';
import { ProfilComponent } from './components/profil/profil.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: EmployeComponent,
    children: [
      {
        path: 'profil', // child route path
        component: ProfilComponent, // child route component that the router renders
      },
      {
        path: '',
        redirectTo: 'profil',
        pathMatch: 'full'
      },
      { path: '**', redirectTo: 'profil', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeRoutes { }
