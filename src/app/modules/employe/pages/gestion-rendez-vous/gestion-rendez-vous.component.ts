import { Component, OnInit } from '@angular/core';
import { RendezVousService } from '../../services/rendez-vous.service';
import { RendezVous } from '../../models/rendez-vous';
import { User } from '../../models/User';
import { environments } from 'src/environments/environments';

@Component({
  selector: 'app-gestion-rendez-vous',
  templateUrl: './gestion-rendez-vous.component.html',
  styleUrls: ['./gestion-rendez-vous.component.css']
})
export class GestionRendezVousComponent implements OnInit {

  idUser = localStorage.getItem('id') || '';
  rendezVous: RendezVous[] = [];
  environments = environments;

  constructor(
    private rendezVousService: RendezVousService
  ) { }

  ngOnInit() {
    this.getRendezVous();
  }

  getRendezVous() {
    this.rendezVousService.getRendezVous(this.idUser).subscribe(
      (res: any) => {
        console.log('res', res);
        this.rendezVous = res;
        console.log('rendezVous', this.rendezVous);
      },
      (error: any) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories : ",
          error
        );
      }
    );
  }

}
