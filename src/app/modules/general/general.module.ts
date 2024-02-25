import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './general.component';
import { GeneralRoutes } from './general.routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderAdminComponent } from './components/Header-Admin/Header-Admin.component';
import { DetailsComponent } from './pages/details/details.component';
import { MenuAdminComponent } from './components/menu-Admin/menu-Admin.component';
import { FooterAdminComponent } from './components/footerAdmin/footerAdmin.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
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
import { ToastModule } from 'primeng/toast';
import { TopServiceComponent } from './components/top-Service/top-Service.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { GalleriaModule } from 'primeng/galleria';
import { DragDropModule } from 'primeng/dragdrop';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PaginatorModule } from 'primeng/paginator';
import { PanierComponent } from './components/panier/panier.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HeureService } from './models/heure.service';
import { CarouselModule } from 'primeng/carousel';
import { MessagesModule } from 'primeng/messages';
import { PaiementComponent } from './components/paiement/paiement.component';
import { ListeRendezVousComponent } from './components/liste-rendez-vous/liste-rendez-vous.component';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  imports: [
    ToastModule,
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
    NgxSpinnerModule,
    ButtonModule,
    ImageModule,
    MenuModule,
    DialogModule,
    RatingModule,
    CalendarModule,
    CheckboxModule,
    InputTextModule,
    RadioButtonModule,
    DropdownModule,
    DividerModule,
    GalleriaModule,
    DragDropModule,
    TagModule,
    TableModule,
    MatCardModule,
    MatDatepickerModule,
    PaginatorModule,
    CarouselModule,
    MessagesModule,
    DataViewModule,
    ConfirmDialogModule,
  ],
  declarations: [
    GeneralComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    HeaderAdminComponent,
    PaiementComponent,
    DetailsComponent,
    MenuAdminComponent,
    FooterAdminComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    ListeRendezVousComponent,
    ButtonNotificationProfilComponent,
    SousCategorieComponent,
    TopServiceComponent,
    ServicesComponent,
    PanierComponent,
  ],
  exports: [
    FooterAdminComponent,
    HeaderAdminComponent,
    MenuAdminComponent,
    ButtonNotificationProfilComponent,
  ],
  providers: [MessageService, HeureService, ConfirmationService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GeneralModule {}
