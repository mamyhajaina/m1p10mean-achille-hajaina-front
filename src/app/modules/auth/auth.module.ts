import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutes } from './auth.routing.module';
import { GeneralModule } from '../general/general.module';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  imports: [CommonModule, AuthRoutes, GeneralModule, FormsModule, ToastModule],
  declarations: [AuthComponent, LoginComponent],
  providers: [MessageService],
})
export class AuthModule {}
