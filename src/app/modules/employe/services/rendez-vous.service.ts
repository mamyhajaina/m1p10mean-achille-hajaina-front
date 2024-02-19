import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class RendezVousService {
  constructor(private http: HttpClient) { }

  getRendezVous(token: string): any {
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

  getRendezVousByIdEmploye(idEmploye: string, token: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http.get(
      `${environments.BASE_URL}/rendezVous/list/${idEmploye}`,
      httpOptions
    );
  }

  validerRendezVous(idRendezVous: string, idEmploye: string, token: string): any {
    let body = {
      idRendezVous: idRendezVous,
      idEmploye: idEmploye
    }
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http.post(
      `${environments.BASE_URL}/rendezVous/valider`,
      body,
      httpOptions
    );
  }

  refuserRendezVous(idRendezVous: string, idEmploye: string, raison: string, token: string): any {
    let body = {
      idRendezVous: idRendezVous,
      idEmploye: idEmploye,
      raison: raison
    }
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http.post(
      `${environments.BASE_URL}/rendezVous/refuser`,
      body,
      httpOptions
    );
  }
}
