import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './general.component';
import { GeneralRoutes } from './general.routing.module';
import { CoreModule } from 'app/core.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    GeneralRoutes,
    CoreModule
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
