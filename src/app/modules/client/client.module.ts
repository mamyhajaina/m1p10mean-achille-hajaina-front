import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutes } from './client.routing.module';
import { GeneralModule } from '../general/general.module';
import { ClientComponent } from './client.component';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutes,
    GeneralModule
  ],
  declarations: [
    ClientComponent
  ]
})
export class ClientModule { }
