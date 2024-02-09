import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeComponent } from './employe.component';
import { GeneralModule } from '../general/general.module';
import { EmployeRoutes } from './employe.routing.module';
// @import 'assets/assets/css/style.css';

@NgModule({
  declarations: [
    EmployeComponent,
  ],
  imports: [
    CommonModule,
    EmployeRoutes,
    GeneralModule
  ]
})
export class EmployeModule { }
