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

  rendezVous: any[] = [];
  userId: any;
  token: any;

  constructor(private rendezvousService: RendezVousService) {}

  ngOnInit() {
    this.userId = localStorage.getItem('id');
    this.token = localStorage.getItem('token');
    this.rendezvousService.getCustomersLarge().then((customers) => {
      this.customers = customers;
      this.loading = false;

      this.customers.forEach(
        (customer) => (customer.date = new Date(customer.date))
      );
      this.getRendezVousByUser();
    });

    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' },
    ];
  }

  getRendezVousByUser() {
    this.rendezvousService
      .getRendezVousByUser(this.userId, this.token)
      .subscribe((data: any) => {
        this.rendezVous = data;
        console.log(this.rendezVous, 'rendaka');
      });
  }

  clear(table: Table) {
    table.clear();
  }

  getSeverity(status: string) {
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
        return '';
    }
  }
}
