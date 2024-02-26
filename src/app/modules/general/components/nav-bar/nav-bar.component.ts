import { Component, HostListener, OnInit } from '@angular/core';
import { CategorieService } from '../../service/categorie.service';
import { Categorie } from '../../models/categorie';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServiceSalonService } from '../../service/serviceSalon.service';
import { ServiceSalon } from '../../models/serviceSalon';
import { io, Socket } from 'socket.io-client';
import { Router } from '@angular/router';
import { environments } from 'src/environments/environments';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  categories: Categorie[] = [];
  serviceSalon: ServiceSalon[] = [];
  responseSearchService: ServiceSalon[] = [];
  activeItem: string | null = null;
  socket!: Socket;
  currentUrl: string;

  constructor(
    private serviceSalonService: ServiceSalonService,
    private categorieService: CategorieService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private location: Location
  ) {
    this.currentUrl = this.router.url;
  }

  ngOnInit() {
    sessionStorage.setItem('url', this.location.path());
    this.getAllCategories();
    this.socket = io(environments.BASE_URL);
    this.socket.on('newCategoryAdded', () => {
      this.getAllCategories();
    });
    this.getAllServices();
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!(event.target as HTMLElement).closest('.host-listner')) {
      this.showDiv50 = false;
      this.activeItem = null;
    }
  }

  getAllCategories() {
    this.categorieService.getAllCategorie().subscribe(
      (res: any) => {
        this.categories = res.categories;

        this.spinner.hide();
      },
      (error: any) => {
        this.spinner.hide();
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories : ",
          error
        );
      }
    );
  }

  findCategoriesByName(name: string): ServiceSalon[] {
    this.responseSearchService = this.serviceSalon.filter(
      (category) => category.id_Categorie.name === name
    );

    return this.responseSearchService;
  }

  showDiv50: boolean = false;

  toggleDiv50(data: boolean, name: string) {
    this.findCategoriesByName(name);
    this.showDiv50 = data;
    this.activeItem = name;
  }

  isActive(name: string): boolean {
    return this.activeItem === name;
  }

  getAllServices() {
    this.serviceSalonService.getTopServices().subscribe(
      (res: any) => {
        this.serviceSalon = res;
      },
      (error: any) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories : ",
          error
        );
      }
    );
  }

  onNavigateServices(product: ServiceSalon) {
    sessionStorage.setItem('service', JSON.stringify(product));
  }
}
