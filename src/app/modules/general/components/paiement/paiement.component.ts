import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatePipe, Location } from '@angular/common';
import { RendezVousService } from '../../service/rendez-vous.service';
import {
  ConfirmEventType,
  ConfirmationService,
  Message,
  MessageService,
} from 'primeng/api';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { EmployeService } from '../../service/employe.service';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss'],
})
export class PaiementComponent implements OnInit, OnDestroy {
  dataPaiement: any[] = [];
  total: number = 0;
  listPrix: number[] = [];
  userId: any;
  token: any;
  visible: boolean = false;
  position: string = '';
  date: Date = new Date();
  heure: any;
  private clockInterval: any;
  solde: number = 0;
  messages: Message[] = [];
  disabledButton: boolean = false;

  constructor(
    private location: Location,
    private rendezVousService: RendezVousService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private datePipe: DatePipe,
    private portefeuille: EmployeService
  ) {
    this.heure = this.datePipe.transform(this.date, 'HH:mm:ss');
    this.clockInterval = setInterval(() => {
      this.date = new Date();
      this.heure = this.datePipe.transform(this.date, 'HH:mm:ss');
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.clockInterval);
  }

  ngOnInit() {
    this.getPortef();
    sessionStorage.setItem('url', this.location.path());
    const paiementString = sessionStorage.getItem('paiement');
    this.userId = localStorage.getItem('id');
    this.token = localStorage.getItem('token');
    this.dataPaiement = paiementString ? JSON.parse(paiementString) : [];
    this.total = this.dataPaiement[this.dataPaiement.length - 1].total;
  }

  addListPrix() {
    for (let index = 0; index < this.dataPaiement.length; index++) {
      this.listPrix[index] = this.dataPaiement[index].prix;
    }
    this.getTotalListPrix();
  }

  getTotalListPrix() {
    this.total = this.listPrix.reduce((acc, value) => acc + value, 0);
    if (this.solde >= this.total) {
      this.disabledButton = true;
      this.messages = [
        { severity: 'success', summary: '', detail: 'Solde OK' },
      ];
    } else {
      this.disabledButton = false;
      this.messages = [
        { severity: 'error', summary: '', detail: 'Solde insuffisant' },
      ];
    }
  }

  onCancelPaiement(data: any) {
    sessionStorage.removeItem('paiement');
    const index = this.dataPaiement.indexOf(data);
    this.dataPaiement.splice(index, 1);
    sessionStorage.setItem('paiement', JSON.stringify(this.dataPaiement));
  }

  getPortef() {
    this.portefeuille
      .getPorteFeuille(localStorage.getItem('id'))
      .subscribe((data: any) => {
        this.solde = data;
        this.addListPrix();
      });
  }

  saveRendezVous() {
    this.spinner.show('payer');
    sessionStorage.clear();
    let body = [];
    for (let index = 0; index < this.dataPaiement.length; index++) {
      body[index] = {
        idClient: this.userId,
        idEmploye: this.dataPaiement[index].employe,
        service: this.dataPaiement[index].idService,
        date: this.dataPaiement[index].dateTime,
        payer: this.listPrix[index],
      };
    }
    let bodyPaiement: { idRendezVous: any; montant: number }[] = [];
    this.rendezVousService
      .setRendezVous(body, this.token)
      .subscribe((data: any) => {
        for (let y = 0; y < data.length; y++) {
          bodyPaiement[y] = {
            idRendezVous: data[y].id,
            montant: this.listPrix[y],
          };
        }
        this.rendezVousService.payer(bodyPaiement, this.token).subscribe(() => {
          this.ngOnDestroy();
          sessionStorage.clear();
          this.messageService.add({
            severity: 'info',
            summary: 'Confirmé',
            detail: 'Prise de rendez-vous succèes',
          });
          const badaka = [
            {
              entrer: 0,
              sortie: this.total,
              User: this.userId,
            },
          ];
          this.portefeuille.achat(badaka).subscribe((data) => {});
          this.spinner.hide('payer');
          setTimeout(() => {
            this.router.navigate(['/public/client']);
          }, 2000);
        });
      });
  }

  confirmPosition() {
    this.position = 'top';

    this.confirmationService.confirm({
      message: 'Etes-vous sur?',
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      acceptIcon: 'none',
      rejectIcon: 'none',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        this.saveRendezVous();
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Rejeté',
              detail: 'action rejeté',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Annulé',
              detail: 'Action annulée',
            });
            break;
        }
      },
      key: 'positionDialog',
    });
  }
}
