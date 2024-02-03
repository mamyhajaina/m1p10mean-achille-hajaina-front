import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientRoutes } from './client.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutes
  ],
  declarations: [ClientComponent]
})
export class ClientModule { }
