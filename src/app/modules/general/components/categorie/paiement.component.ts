import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss'],
})
export class PaiementComponent implements OnInit {
  dataPaiement: any[] = [];

  constructor(private location: Location) {}

  ngOnInit() {
    sessionStorage.setItem('url', this.location.path());
    const paiementString = sessionStorage.getItem('paiement');
    this.dataPaiement = paiementString ? JSON.parse(paiementString) : [];
    console.log(this.dataPaiement);
  }
}
