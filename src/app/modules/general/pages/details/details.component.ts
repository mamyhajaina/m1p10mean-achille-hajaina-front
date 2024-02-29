import { Component, OnInit } from '@angular/core';
import { environments } from 'src/environments/environments';
import { EmployeService } from '../../service/employe.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  environments = environments;
  solde: number = 0;
  depot: any;
  constructor(
    private portefeuille: EmployeService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getPortef();
  }

  getPortef() {
    this.portefeuille
      .getPorteFeuille(localStorage.getItem('id'))
      .subscribe((data: any) => {
        this.solde = data;
      });
  }

  depotArgent() {
    const body = [
      {
        entrer: this.depot,
        sortie: 0,
        User: localStorage.getItem('id'),
      },
    ];
    this.portefeuille.setPortefeuille(body).subscribe((data) => {
      this.getPortef();
      this.messageService.add({
        severity: 'success',
        summary: 'Confirmé',
        detail: 'Dépôt success',
      });
      this.depot = '';
    });
  }
}
