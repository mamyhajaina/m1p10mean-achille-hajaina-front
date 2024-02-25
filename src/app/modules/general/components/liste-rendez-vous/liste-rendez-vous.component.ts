import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { RendezVousService } from '../../service/rendez-vous.service';
import { Table } from 'primeng/table';

export interface Country {
  name: string;
  code: string;
}

export interface Representative {
  name: string;
  image: string;
}

export interface Customer {
  id: number;
  name: string;
  country: Country;
  company: string;
  date: string | Date;
  status: string;
  activity: number;
  representative: Representative;
  verified: boolean;
  balance: number;
}

@Component({
  selector: 'app-liste-rendez-vous',
  templateUrl: './liste-rendez-vous.component.html',
  styleUrls: ['./liste-rendez-vous.component.scss'],
})
export class ListeRendezVousComponent implements OnInit {
  customers: Customer[] = [];

  representatives: Representative[] = [];

  statuses: any[] = [];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  status: string = '';
  rendezVous: any[] = [];
  userId: any;
  token: any;
  minHeight: string = '';

  constructor(private rendezvousService: RendezVousService) {}

  ngOnInit() {
    this.minHeight = '50rem';
    this.loading = true;
    this.userId = localStorage.getItem('id');
    this.token = localStorage.getItem('token');
    this.getRendezVousByUser();

    this.statuses = [
      { label: 'Terminer', serverity: 'primary', value: 'terminer' },
      { label: 'Valider', serverity: 'success', value: 'valider' },
      { label: 'Refuser', serverity: 'danger', value: 'refuser' },
      {
        label: 'En vours de traitement',
        serverity: 'warning',
        value: 'Encour de traitement',
      },
    ];
  }

  getRendezVousByUser() {
    this.rendezvousService
      .getRendezVousByUser(this.userId, this.token)
      .subscribe((data: any) => {
        this.rendezVous = data;
        for (let index = 0; index < this.rendezVous.length; index++) {
          this.rendezVous[index].status =
            this.rendezVous[index].etat[
              this.rendezVous[index].etat.length - 1
            ].name;
        }
        this.loading = false;
        this.minHeight = 'auto';
      });
  }

  clear(table: Table) {
    table.clear();
  }

  getSeverity(status: any) {
    switch (status) {
      case 'unqualified':
        return 'danger';

      case 'qualified':
        return 'success';

      case 'new':
        return 'info';

      case 'negotiation':
        return 'warning';

      case 'renewal':
        return null;

      default:
        return status;
    }
  }
}
