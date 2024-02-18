import { Component, OnInit } from '@angular/core';
import { ServiceSalon } from '../../models/serviceSalon';
import { ServiceSalonService } from '../../service/serviceSalon.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

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

  constructor(
    private productService: ServiceSalonService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.selectedProducts = [];
    const panierString = sessionStorage.getItem('panier');
    this.panier = panierString ? JSON.parse(panierString) : [];
    this.statuses = [
      { label: 'Visage', value: 'visage' },
      { label: 'Coiffure', value: 'coiffure' },
      { label: 'Main & pieds', value: 'Main & pieds' },
      { label: 'Epilation', value: 'epilation' },
      { label: 'Corps', value: 'corps' },
      { label: 'Homme', value: 'homme' },
      { label: 'Massage', value: 'massage' },
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
      },
      (error: any) => {
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
    if (this.panier) {
      const serviceExists = this.panier.find(
        (item) => item._id === product._id
      );
      if (serviceExists) {
        this.messageService.add({
          key: 'tc',
          severity: 'error',
          summary: 'Error',
          detail: `Le service est déjà sélectionné.`,
        });
      } else {
        const index = this.availableProducts.indexOf(product);
        this.availableProducts.splice(index, 1);
        this.selectedProducts.push(product);
      }
    } else {
      const index = this.availableProducts.indexOf(product);
      this.availableProducts.splice(index, 1);
      this.selectedProducts.push(product);
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
      if (this.panier) {
        const serviceExists = this.panier.find(
          (item) => item._id === this.draggedProduct._id
        );
        if (serviceExists) {
          this.messageService.add({
            key: 'tc',
            severity: 'error',
            summary: 'Error',
            detail: `Le service est déjà sélectionné.`,
          });
        } else {
          let draggedProductIndex = this.findIndex(this.draggedProduct);
          this.selectedProducts = [
            ...this.selectedProducts,
            this.draggedProduct,
          ];
          this.availableProducts = this.availableProducts.filter(
            (val, i) => i != draggedProductIndex
          );

          this.draggedProduct = null;
        }
      } else {
        let draggedProductIndex = this.findIndex(this.draggedProduct);
        this.selectedProducts = [...this.selectedProducts, this.draggedProduct];
        this.availableProducts = this.availableProducts.filter(
          (val, i) => i != draggedProductIndex
        );

        this.draggedProduct = null;
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
    switch (status) {
      case 'Coiffure':
        return 'success';

      case 'Massage':
        return 'danger';

      case 'Main et pieds':
        return 'info';

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
