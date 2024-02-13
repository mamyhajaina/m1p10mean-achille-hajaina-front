import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  constructor(private http: HttpClient) { }

  getRendezVous(idUser: string): any {
    return this.http.get(`${environments.BASE_URL}/rendezVous/list`);
  }

}
