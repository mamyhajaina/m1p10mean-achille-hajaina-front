import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../service/product.service';
import { ServiceSalon } from '../../models/serviceSalon';
import { ServiceSalonService } from '../../service/serviceSalon.service';

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

  constructor(private productService: ServiceSalonService) {}

  ngOnInit() {
    this.selectedProducts = [];
    // this.productService
    //   .getProductsSmall()
    //   .then((products) => (this.availableProducts = products));
    this.getAllServices();
  }

  getAllServices() {
    this.productService.getTopServices().subscribe(
      (res: any) => {
        this.availableProducts = res;
        console.log(this.availableProducts, 'hahaha');
      },
      (error: any) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories : ",
          error
        );
      }
    );
  }

  dragStart(product: ServiceSalon) {
    console.log(product, 'mandeha');

    this.draggedProduct = product;
  }

  drop() {
    if (this.draggedProduct) {
      let draggedProductIndex = this.findIndex(this.draggedProduct);
      this.selectedProducts = [...this.selectedProducts, this.draggedProduct];
      // this.availableProducts = this.availableProducts.filter(
      //   (val, i) => i != draggedProductIndex
      // );
      this.draggedProduct = null;
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
    const index = this.selectedProducts.indexOf(product);
    if (index !== -1) {
      this.selectedProducts.splice(index, 1);
    }
  }
}
