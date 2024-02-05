import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './general.component';
import { GeneralRoutes } from './general.routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderAdminComponent } from './components/Header-Admin/Header-Admin.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { DetailsComponent } from './pages/details/details.component';
import { MenuAdminComponent } from './components/menu-Admin/menu-Admin.component';
import { LogoAndNameSiteComponent } from './components/logo-and-name-site/logo-and-name-site.component';

@NgModule({
  imports: [
    CommonModule,
    GeneralRoutes
  ],
  declarations: [
    GeneralComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    HeaderAdminComponent,
    CategorieComponent,
    DetailsComponent,
    MenuAdminComponent,
    LogoAndNameSiteComponent
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    HeaderAdminComponent,
    MenuAdminComponent,
    LogoAndNameSiteComponent
  ]
})
export class GeneralModule { }
