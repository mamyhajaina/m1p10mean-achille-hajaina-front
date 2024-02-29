import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
  constructor(private http: HttpClient) {}

  getAllEmploye(): any {
    return this.http.get(`${environments.BASE_URL}/employe/list`);
  }

  getAllEmployeByEmploye(): any {
    return this.http.get(`${environments.BASE_URL}/employe/list/categori`);
  }

  getClient(id: any): any {
    return this.http.get(`${environments.BASE_URL}/auth/getClient/${id}`, id);
  }

  getPorteFeuille(id: any) {
    return this.http.get(
      `${environments.BASE_URL}/porteFeuille/solde/${id}`,
      id
    );
  }

  setPortefeuille(body: any) {
    return this.http.post(
      `${environments.BASE_URL}/porteFeuille/depotSolde`,
      body
    );
  }

  achat(body: any) {
    return this.http.post(`${environments.BASE_URL}/porteFeuille/achat`, body);
  }
}
