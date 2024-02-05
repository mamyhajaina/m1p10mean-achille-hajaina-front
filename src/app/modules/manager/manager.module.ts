import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';
import { ManagerRoutes } from './manager.routing.module';
import { GeneralModule } from '../general/general.module';
import { GestionPersonnelComponent } from './pages/gestion-personnel/gestion-personnel.component';
import { GestionServicesComponent } from './pages/gestion-services/gestion-services.component';
import { StatistiqueComponent } from './pages/statistique/statistique.component';

@NgModule({
  imports: [
    CommonModule,
    ManagerRoutes,
    GeneralModule
  ],
  declarations: [
    ManagerComponent
  ]
})
export class ManagerModule { }
