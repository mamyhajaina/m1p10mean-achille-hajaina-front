import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../../service/employe.service';
import { Employe } from '../../models/employe';
import { ServiceSalon } from '../../models/serviceSalon';
import * as moment from 'moment';
import { HeureService } from '../../models/heure.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss'],
})
export class PanierComponent implements OnInit {
  date: Date = new Date();
  dateString: string = '';
  employes: Employe[] = [];
  panier: ServiceSalon[] = [];
  heures: any[];
  selectedItem: any;

  constructor(
    private employeService: EmployeService,
    private heureService: HeureService
  ) {
    this.heures = this.heureService.getProductsData();
  }

  ngOnInit() {
    console.log(this.heures);

    const panierString = sessionStorage.getItem('panier');
    this.panier = panierString ? JSON.parse(panierString) : [];
    this.getAllEmploye();
  }

  getAllEmploye() {
    this.employeService.getAllEmploye().subscribe((data: Employe[]) => {
      this.employes = data;
    });
  }

  onCancelPanier(product: ServiceSalon) {
    sessionStorage.removeItem('panier');
    const index = this.panier.indexOf(product);
    this.panier.splice(index, 1);
    sessionStorage.setItem('panier', JSON.stringify(this.panier));
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  handleCalendarClose(date: Date) {
    this.dateString = moment(date).format('YYYY-MM-DD');
    this.date = date;
    this.visible = false;
  }

  toggleActive(item: any) {
    console.log(item);
    this.selectedItem = this.selectedItem === item ? null : item;
  }
}
