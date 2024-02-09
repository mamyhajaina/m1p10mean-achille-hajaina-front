import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  constructor(private http: HttpClient) {}

  getAllCategorie(): any {
    return this.http.get(`${environments.BASE_URL}/categorie/list`);
  }
}
