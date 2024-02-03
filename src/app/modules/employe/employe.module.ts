import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeComponent } from './employe.component';
import { EmployeRoutes } from './employe.routing.module';

@NgModule({
  imports: [
    CommonModule,
    EmployeRoutes
  ],
  declarations: [EmployeComponent]
})
export class EmployeModule { }
