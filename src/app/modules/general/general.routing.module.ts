import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './general.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { DetailsComponent } from './pages/details/details.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SousCategorieComponent } from './components/sous-categorie/sous-categorie.component';
import { PanierComponent } from './components/panier/panier.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { ListeRendezVousComponent } from './components/liste-rendez-vous/liste-rendez-vous.component';

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
        path: 'porte-feuille', // child route path
        component: DetailsComponent, // child route component that the router renders
      },
      {
        path: 'profil', // child route path
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
        path: 'salon', // child route path
        component: SousCategorieComponent, // child route component that the router renders
      },
      {
        path: 'panier', // child route path
        component: PanierComponent, // child route component that the router renders
      },
      {
        path: 'paiement', // child route path
        component: PaiementComponent, // child route component that the router renders
      },
      {
        path: 'client', // child route path
        component: ListeRendezVousComponent, // child route component that the router renders
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralRoutes {}
