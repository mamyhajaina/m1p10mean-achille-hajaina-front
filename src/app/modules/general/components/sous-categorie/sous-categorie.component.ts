import { Component, OnInit } from '@angular/core';
import { ServiceSalon } from '../../models/serviceSalon';
import { ServiceSalonService } from '../../service/serviceSalon.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { NgxSpinnerService } from 'ngx-spinner';
import { Location } from '@angular/common';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-sous-categorie',
  templateUrl: './sous-categorie.component.html',
  styleUrls: ['./sous-categorie.component.scss'],
})
export class SousCategorieComponent implements OnInit {
  availableProducts: ServiceSalon[] = [];
  selectedProducts: ServiceSalon[] = [];
  draggedProduct!: any;
  value = 5;
  first: number = 0;
  rows: number = 10;
  statuses!: any[];
  visible: boolean = false;
  detailsService: ServiceSalon = new ServiceSalon();
  popupPanier: boolean = false;
  panier: ServiceSalon[] = [];
  footer: boolean = false;

  constructor(
    private productService: ServiceSalonService,
    private router: Router,
    private messageService: MessageService,
    private spinner: NgxSpinnerService,
    private location: Location
  ) {}

  ngOnInit() {
    sessionStorage.setItem('url', this.location.path());
    this.spinner.show();
    this.footer = false;
    this.selectedProducts = [];
    const panierString = sessionStorage.getItem('panier');
    this.panier = panierString ? JSON.parse(panierString) : [];
    this.statuses = [
      { label: 'Visage', value: 'visage', serverity: 'primary' },
      { label: 'Coiffure', value: 'coiffure', serverity: 'success' },
      { label: 'Main & pieds', value: 'Main & pieds', serverity: 'danger' },
      { label: 'Corps', value: 'corps', serverity: 'warning' },
      { label: 'Epilation', value: 'epilation', serverity: 'primary' },
      { label: 'Massage', value: 'massage', serverity: 'danger' },
      { label: 'Homme', value: 'homme', serverity: 'warning' },
    ];
    for (let index = 0; index < this.panier.length; index++) {
      this.selectedProducts.push(this.panier[index]);
    }
    this.getAllServices();
  }

  getAllServices() {
    this.productService.getTopServices().subscribe(
      (res: any) => {
        this.availableProducts = res;
        this.footer = true;
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

  onAddSelectService(product: ServiceSalon) {
    const panierString = sessionStorage.getItem('panier');
    this.panier = panierString ? JSON.parse(panierString) : [];
    const existingService = this.panier.find(
      (item) => item._id === product._id
    );
    if (!existingService) {
      this.availableProducts.splice(this.availableProducts.indexOf(product), 1);
      this.selectedProducts.push(product);
    } else {
      this.messageService.add({
        key: 'tc',
        severity: 'error',
        summary: 'Error',
        detail: `Le service est déjà sélectionné.`,
      });
    }
  }

  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }

  dragStart(product: ServiceSalon) {
    this.draggedProduct = product;
  }

  drop() {
    const panierString = sessionStorage.getItem('panier');
    this.panier = panierString ? JSON.parse(panierString) : [];
    if (this.draggedProduct) {
      if (!this.panier.find((item) => item._id === this.draggedProduct._id)) {
        const draggedProductIndex = this.availableProducts.indexOf(
          this.draggedProduct
        );
        this.selectedProducts.push(this.draggedProduct);
        this.availableProducts.splice(draggedProductIndex, 1);
        this.draggedProduct = null;
      } else {
        this.messageService.add({
          key: 'tc',
          severity: 'error',
          summary: 'Error',
          detail: `Le service est déjà sélectionné.`,
        });
      }
    }
  }

  dragEnd() {
    this.draggedProduct = null;
  }

  findIndex(product: ServiceSalon) {
    let index = -1;
    for (let i = 0; i < this.availableProducts.length; i++) {
      if (product._id === this.availableProducts[i]._id) {
        index = i;
        break;
      }
    }

    return index;
  }

  onRemoveProduct(product: ServiceSalon) {
    sessionStorage.removeItem('panier');
    const index = this.selectedProducts.indexOf(product);
    if (index !== -1) {
      this.selectedProducts.splice(index, 1);
      this.availableProducts.push(product);
      sessionStorage.setItem('panier', JSON.stringify(this.selectedProducts));
    }
  }

  getSeverity(status: string) {
    console.log(status);

    switch (status) {
      case 'Coiffure':
        return 'success';

      case 'Massage':
        return 'danger';

      case 'Main & pieds':
        return 'danger';

      case 'Corps':
        return 'warning';

      case 'Visage':
        return 'primary';

      case 'Homme':
        return 'warning';

      case 'Epilation':
        return 'primary';

      default:
        return '';
    }
  }

  showDialog(product: ServiceSalon) {
    this.detailsService = product;
    this.visible = true;
  }

  saveInPanier() {
    sessionStorage.setItem('panier', JSON.stringify(this.selectedProducts));
    this.router.navigate(['/public/panier']);
  }
}
