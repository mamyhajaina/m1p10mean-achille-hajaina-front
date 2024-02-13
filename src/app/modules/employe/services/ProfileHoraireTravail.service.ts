import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProfileHoraireTravailService {

  constructor(private http: HttpClient) { }

  getSolde(idUser: string): any {
    return this.http.get(`${environments.BASE_URL}/porteFeuille/solde/${idUser}`);
  }

  getHoraireTravail(idUser: string): any {
    return this.http.get(`${environments.BASE_URL}/horaireTravail/list/user/${idUser}`);
  }

}
