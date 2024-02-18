import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../../service/employe.service';
import { Employe } from '../../models/employe';
import { ServiceSalon } from '../../models/serviceSalon';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  date: Date = new Date();
  employes: Employe[] = [];
  panier: ServiceSalon[] = [];

  constructor(private employeService: EmployeService) {}

  ngOnInit() {
    const panierString = sessionStorage.getItem('panier');
    this.panier = panierString ? JSON.parse(panierString) : [];
    this.getAllEmploye();
  }

  getAllEmploye() {
    this.employeService.getAllEmploye().subscribe((data: Employe[]) => {
      this.employes = data;
    });
  }
}
