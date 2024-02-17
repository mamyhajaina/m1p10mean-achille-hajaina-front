import { RendezVousComponent } from './pages/rendez-vous/rendez-vous.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutes } from './client.routing.module';
import { GeneralModule } from '../general/general.module';
import { ClientComponent } from './client.component';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutes,
    GeneralModule,
    DialogModule
  ],
  declarations: [
    ClientComponent,
    RendezVousComponent
  ]
})
export class ClientModule { }
