import { Component, OnInit } from '@angular/core';
import { RendezVousService } from '../../services/rendez-vous.service';
import { RendezVous } from '../../models/rendez-vous';
import { User } from '../../models/User';
import { environments } from 'src/environments/environments';

@Component({
  selector: 'app-gestion-rendez-vous',
  templateUrl: './gestion-rendez-vous.component.html',
  styleUrls: ['./gestion-rendez-vous.component.css'],
})
export class GestionRendezVousComponent implements OnInit {
  idUser = localStorage.getItem('id') || '';
  rendezVous: RendezVous[] = [];
  environments = environments;
  oneRendezVous: RendezVous[] = [];
  token: any;

  constructor(private rendezVousService: RendezVousService) {}

  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.getRendezVous();
    this.getRendezVousByIdEmploye();
  }

  getRendezVous() {
    this.rendezVousService.getRendezVous(this.idUser, this.token).subscribe(
      (res: any) => {
        this.rendezVous = res;
      },
      (error: any) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories : ",
          error
        );
      }
    );
  }

  getRendezVousByIdEmploye() {
    this.rendezVousService
      .getRendezVousByIdEmploye(this.idUser, this.token)
      .subscribe((res: any) => {});
  }
}
