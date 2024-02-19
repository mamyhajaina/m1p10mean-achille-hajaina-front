import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeComponent } from './employe.component';
import { GeneralModule } from '../general/general.module';
import { EmployeRoutes } from './employe.routing.module';
import { TabViewModule } from 'primeng/tabview';
import { ProfilHoraireTravailComponent } from './pages/profil-horaire-travail/profil-horaire-travail.component';
import { GestionTachesComponent } from './pages/gestion-taches/gestion-taches.component';
import { GestionRendezVousComponent } from './pages/gestion-rendez-vous/gestion-rendez-vous.component';
import { HoraireTravailComponent } from './components/horaire-travail/horaire-travail.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
// @import 'assets/assets/css/style.css';

@NgModule({
  declarations: [
    EmployeComponent,
    ProfilHoraireTravailComponent,
    GestionTachesComponent,
    GestionRendezVousComponent,
    HoraireTravailComponent
  ],
  imports: [
    CommonModule,
    EmployeRoutes,
    GeneralModule,
    TabViewModule,
    NgxSpinnerModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
    FormsModule
  ]
})
export class EmployeModule { }
