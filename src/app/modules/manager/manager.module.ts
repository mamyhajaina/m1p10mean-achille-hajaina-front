import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';
import { ManagerRoutes } from './manager.routing.module';
import { GeneralModule } from '../general/general.module';

@NgModule({
  imports: [
    CommonModule,
    ManagerRoutes,
    GeneralModule
  ],
  declarations: [ManagerComponent]
})
export class ManagerModule { }
