import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './general.component';
import { GeneralRoutes } from './general.routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    GeneralRoutes
  ],
  declarations: [
    GeneralComponent,
    NavBarComponent,
    HomeComponent
  ],
  exports: [
    NavBarComponent
  ]
})
export class GeneralModule { }
