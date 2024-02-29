import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class RendezVousService {
  constructor(private http: HttpClient) {}

  checkEmployeStatus(data: any): any {
    return this.http.post(`${environments.BASE_URL}/rendezVous/verifier`, data);
  }

  setRendezVous(data: any, token: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http.post(
      `${environments.BASE_URL}/rendezVous/priseRendezVous`,
      data,
      httpOptions
    );
  }

  updateOne(data: any, token: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http.post(
      `${environments.BASE_URL}/rendezVous/updateOne`,
      data,
      httpOptions
    );
  }

  payer(data: any, token: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http.post(
      `${environments.BASE_URL}/paiment/payer`,
      data,
      httpOptions
    );
  }

  getRendezVousByUser(idUser: any, token: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http.get(
      `${environments.BASE_URL}/rendezVous/client/rdv/${idUser}`,
      httpOptions
    );
  }

  onCancelRvd(data: any): any {
    return this.http.post(`${environments.BASE_URL}/rendezVous/cancel`, data);
  }
}
