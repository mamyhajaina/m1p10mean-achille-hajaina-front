import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutes } from './auth.routing.module';
import { GeneralModule } from '../general/general.module';
import { LoginComponent } from './pages/login/login.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutes,
    GeneralModule,
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    SignInComponent
  ]
})
export class AuthModule { }
