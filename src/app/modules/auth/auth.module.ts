import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutes } from './auth.routing.module';
import { GeneralModule } from '../general/general.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutes,
    GeneralModule
  ],
  declarations: [
    AuthComponent
  ]
})
export class AuthModule { }
