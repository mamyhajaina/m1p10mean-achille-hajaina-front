import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class OffreSpecialeService {
  constructor(private http: HttpClient) {}

  getAllOffreSpeciale(): any {
    return this.http.get(`${environments.BASE_URL}/offreSpeciale/all`);
  }

  updateOffreSpeciale(idOffre: any): any {
    return this.http.post(
      `${environments.BASE_URL}/offreSpeciale/update`,
      idOffre
    );
  }
}
