import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ServiceSalonService {
  constructor(private http: HttpClient) {}

  getTopServices(): any {
    return this.http.get(`${environments.BASE_URL}/service/top`);
  }

  getPreference(idClient: any): any {
    return this.http.get(
      `${environments.BASE_URL}/preferance/liste/${idClient}`,
      idClient
    );
  }

  clearPreference(id: any): any {
    return this.http.post(`${environments.BASE_URL}/preferance/delete`, id);
  }

  savePreference(data: any): any {
    return this.http.post(`${environments.BASE_URL}/preferance/create`, data);
  }
}
