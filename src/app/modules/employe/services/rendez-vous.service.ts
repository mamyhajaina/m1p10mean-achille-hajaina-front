import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class RendezVousService {
  constructor(private http: HttpClient) {}

  getRendezVous(idUser: string, token: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http.get(
      `${environments.BASE_URL}/rendezVous/list`,
      httpOptions
    );
  }

  getRendezVousByIdEmploye(idUser: string, token: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http.get(
      `${environments.BASE_URL}/rendezVous/listRendezVous/employe/${idUser}`,
      httpOptions
    );
  }
}
