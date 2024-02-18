import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../../service/employe.service';
import { Employe } from '../../models/employe';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  date: Date = new Date();
  employes: Employe[] = [];

  constructor(private employeService: EmployeService) {}

  ngOnInit() {
    this.getAllEmploye();
  }

  getAllEmploye() {
    this.employeService.getAllEmploye().subscribe((data: Employe[]) => {
      this.employes = data;
    });
  }
}
