import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutes } from './auth.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutes
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
