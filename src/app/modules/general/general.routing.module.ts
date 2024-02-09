import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './general.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { DetailsComponent } from './pages/details/details.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';

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
        path: 'details', // child route path
        component: DetailsComponent, // child route component that the router renders
      },
      {
        path: 'about', // child route path
        component: AboutComponent, // child route component that the router renders
      },
      {
        path: 'services', // child route path
        component: ServicesComponent, // child route component that the router renders
      },
      {
        path: 'contact', // child route path
        component: ContactComponent, // child route component that the router renders
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutes { }
