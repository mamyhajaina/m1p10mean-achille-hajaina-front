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
import { FooterAdminComponent } from './components/footerAdmin/footerAdmin.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PriseRendezVousComponent } from './components/prise-rendez-vous/prise-rendez-vous.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ButtonNotificationProfilComponent } from './components/button-notification-profil/button-notification-profil.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SousCategorieComponent } from './components/sous-categorie/sous-categorie.component';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

@NgModule({
  imports: [
    CommonModule,
    GeneralRoutes,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ConfirmPopupModule,
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
    FooterAdminComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    PriseRendezVousComponent,
    ButtonNotificationProfilComponent,
    SousCategorieComponent,
  ],
  exports: [
    FooterAdminComponent,
    HeaderAdminComponent,
    MenuAdminComponent,
    ButtonNotificationProfilComponent,
  ],
})
export class GeneralModule {}
