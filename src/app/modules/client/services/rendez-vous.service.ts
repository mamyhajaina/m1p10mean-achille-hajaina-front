import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResponse } from 'app/modules/general/models/dataResponse';
import { environments } from 'environments/environments';

@Injectable()
export class RendezVousService {

    constructor(
        private http: HttpClient,
    ) { }

    getRendezVous(): any {
        return this.http.get<DataResponse>(
            `${environments.BASE_URL}${environments.CONTEXT_PATH}/activite/idVolet`
        );
    }

}
