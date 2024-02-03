import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './general.component';
import { GeneralRoutes } from './general.routing.module';

@NgModule({
  imports: [
    CommonModule,
    GeneralRoutes
  ],
  declarations: [GeneralComponent]
})
export class GeneralModule { }
