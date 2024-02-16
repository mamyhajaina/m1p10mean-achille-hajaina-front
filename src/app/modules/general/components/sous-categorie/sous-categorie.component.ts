import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-sous-categorie',
  templateUrl: './sous-categorie.component.html',
  styleUrls: ['./sous-categorie.component.scss'],
})
export class SousCategorieComponent implements OnInit {
  availableProducts: Product[] = [];
  selectedProducts: Product[] = [];
  draggedProduct!: any;
  value = 5;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.selectedProducts = [];
    this.productService
      .getProductsSmall()
      .then((products) => (this.availableProducts = products));
  }

  dragStart(product: Product) {
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

  findIndex(product: Product) {
    let index = -1;
    for (let i = 0; i < this.availableProducts.length; i++) {
      if (product.id === this.availableProducts[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return '';
    }
  }

  onRemoveProduct(product: Product) {
    const index = this.selectedProducts.indexOf(product);
    if (index !== -1) {
      this.selectedProducts.splice(index, 1);
    }
  }
}
