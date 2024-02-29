import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { RendezVousService } from '../../service/rendez-vous.service';
import { Table } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { EmployeService } from '../../service/employe.service';

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
  checked: any;
  clonedProducts: { [s: string]: any } = {};
  restePayer: any;
  constructor(
    private rendezvousService: RendezVousService,
    private messageService: MessageService,
    private portefeuille: EmployeService
  ) {}

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

  onRowEditInit(product: any) {
    this.clonedProducts[product.id] = { ...product };
  }

  onRowEditSave(product: any) {
    console.log(product);
    if (product.Service.prix - product.payer <= this.restePayer) {
      const body = {
        idRendezVous: product._id,
        payer: product.Service.prix,
      };
      this.rendezvousService.updateOne(body, this.token).subscribe((data) => {
        const dbody = [
          {
            idRendezVous: product._id,
            montant: this.restePayer,
          },
        ];
        this.rendezvousService.payer(dbody, this.token).subscribe((data) => {
          const badaka = [
            {
              entrer: 0,
              sortie: this.restePayer,
              User: this.userId,
            },
          ];
          this.portefeuille.achat(badaka).subscribe((data) => {});
        });
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: 'Montant invalide',
      });
    }
  }

  onRowEditCancel(product: any, index: number) {
    this.rendezVous[index] = this.clonedProducts[product.id];
    delete this.clonedProducts[product.id];
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

  cancelRdv(id: any) {
    const body = {
      idRendezVous: id,
    };
    this.rendezvousService.onCancelRvd(body).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Succès',
        detail: 'Rendez-vous annulé',
      });
    });
  }
}
