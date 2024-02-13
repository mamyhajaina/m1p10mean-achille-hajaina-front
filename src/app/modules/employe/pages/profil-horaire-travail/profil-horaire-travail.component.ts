import { Component, OnInit } from '@angular/core';
import { LocalStorageServiceService } from 'src/app/modules/services/LocalStorageService.service';
import { environments } from 'src/environments/environments';

@Component({
  selector: 'app-profil-horaire-travail',
  templateUrl: './profil-horaire-travail.component.html',
  styleUrls: ['./profil-horaire-travail.component.css']
})
export class ProfilHoraireTravailComponent implements OnInit {

  profile: any;
  environments = environments;

  constructor(
  ) { }

  ngOnInit() {
    this.profile = {
      user: localStorage.getItem('user'),
      email: localStorage.getItem('email'),
      pays: localStorage.getItem('pays'),
      adresse: localStorage.getItem('adresse'),
      emplois: localStorage.getItem('emplois'),
      salaire: localStorage.getItem('salaire'),
      phone: localStorage.getItem('phone'),
      image: localStorage.getItem('image')
    };
    console.log('profile', this.profile.emplois);

    console.log('profile', this.profile);
  }

}
