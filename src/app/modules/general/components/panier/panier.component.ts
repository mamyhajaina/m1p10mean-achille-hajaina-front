import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../../service/employe.service';
import { Employe } from '../../models/employe';
import { ServiceSalon } from '../../models/serviceSalon';
import * as moment from 'moment';
import { HeureService } from '../../models/heure.service';
import { RendezVousService } from '../../service/rendez-vous.service';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss'],
})
export class PanierComponent implements OnInit {
  date: Date[] = [new Date(new Date().getTime() + 24 * 60 * 60 * 1000)];
  employes: Employe[] = [];
  panier: any[] = [];
  heures: any[];
  selectedItem: any[] = [];
  index: number = 0;
  dateString: string[] = [];
  dataVerif = [
    {
      idEmploye: '',
      service: '',
      date: '',
    },
  ];
  heureList: string[] = [];
  employesList: any[] = [];
  verification: any[] = [];
  minDate: Date;
  maxDate: Date;
  messages: any[] = [];
  checkStatus: boolean = false;
  token: any;
  employeName: String[] = [];
  employerCat: any[] = [];
  total: number = 0;

  constructor(
    private employeService: EmployeService,
    private heureService: HeureService,
    private rendezVousService: RendezVousService,
    private config: PrimeNGConfig,
    private spinner: NgxSpinnerService,
    private messageService: MessageService,
    private router: Router,
    private location: Location
  ) {
    this.heures = this.heureService.getProductsData();
    const today = new Date();
    this.minDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 1
    );
    this.maxDate = new Date(
      today.getFullYear(),
      today.getMonth() + 3,
      today.getDate()
    );
  }

  ngOnInit() {
    sessionStorage.setItem('url', this.location.path());
    this.token = localStorage.getItem('token');
    this.config.setTranslation({
      today: 'Demain',
      clear: 'Effacer',
      dayNames: [
        'Dimanche',
        'Lundi',
        'Mardi',
        'Mercredi',
        'Jeudi',
        'Vendredi',
        'Samedi',
      ],
      dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
      dayNamesMin: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
      monthNames: [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre',
      ],
      monthNamesShort: [
        'Janv',
        'Févr',
        'Mars',
        'Avr',
        'Mai',
        'Juin',
        'Juil',
        'Août',
        'Sept',
        'Oct',
        'Nov',
        'Déc',
      ],
    });

    const panierString = sessionStorage.getItem('panier');
    this.panier = panierString ? JSON.parse(panierString) : [];
    this.getAllEmploye();
    this.addDefaultHours();
    this.addDefaultDate();
    this.getAllEmployeByCat();
  }

  addDefaultDate() {
    for (let index = 0; index < this.panier.length; index++) {
      this.date[index] = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    }
  }

  addDefaultHours() {
    for (let index = 0; index < this.panier.length; index++) {
      this.selectedItem[index] = this.heures[0];
    }
  }

  getAllEmploye() {
    this.employeService.getAllEmploye().subscribe((data: Employe[]) => {
      this.employes = data;
    });
  }

  getAllEmployeByCat() {
    this.employeService.getAllEmployeByEmploye().subscribe((data: any[]) => {
      this.employerCat = data;
    });
  }

  getEmployesByCat(catId: string): any[] {
    const categorie = this.employerCat.find((cat) => cat.idCat === catId);
    return categorie ? categorie.employes : [];
  }

  onCancelPanier(product: ServiceSalon) {
    sessionStorage.removeItem('panier');
    const index = this.panier.indexOf(product);
    this.panier.splice(index, 1);
    sessionStorage.setItem('panier', JSON.stringify(this.panier));
    this.messages.splice(index, 1);
    this.employesList.splice(index, 1);
    this.dateString.splice(index, 1);
    this.heureList.splice(index, 1);
  }

  visible: boolean = false;

  showDialog(index: number) {
    this.index = index;
    this.visible = true;
  }

  handleCalendarClose(date: Date) {
    this.dateString[this.index] = moment(date).format('YYYY-MM-DD');
    this.date[this.index] = date;
    this.visible = false;
  }

  toggleActive(item: any, index: any) {
    this.selectedItem[index] = this.selectedItem[index] === item ? null : item;
    this.heureList[index] = this.selectedItem[index].name;
  }

  onEmployeeSelected(event: any, index: number) {
    const employeeId = event.target.value;
    this.index = index;
    this.employesList[this.index] = employeeId;
  }

  sendVerification() {
    this.spinner.show('panier');
    this.dataVerif = [];
    for (let index = 0; index < this.panier.length; index++) {
      if (!this.employesList[index]) {
        this.employesList[index] = null;
      }
      if (this.employesList[index] === 'null') {
        this.employesList[index] = null;
      }
      if (!this.dateString[index]) {
        this.dateString[index] = moment(new Date()).format('YYYY-MM-DD');
      }
      if (!this.heureList[index]) {
        this.heureList[index] = this.heures[0].name;
      }
      this.dataVerif.push({
        idEmploye: this.employesList[index],
        service: this.panier[index]._id,
        date: `${this.dateString[index]} ${this.heureList[index]}`,
      });
    }

    console.log(this.dataVerif, 'this.dataVerif');

    this.rendezVousService.checkEmployeStatus(this.dataVerif).subscribe(
      (data: any) => {
        let allStatusTrue = true;
        let countFalseStatus = 0;
        for (let index = 0; index < data.length; index++) {
          if (data[index].content.status === false) {
            countFalseStatus++;
            allStatusTrue = false;
            this.messages[index] = [
              {
                severity: 'error',
                summary: '',
                detail: data[index].content.message,
              },
            ];
          } else {
            this.messages[index] = [
              {
                severity: 'success',
                summary: '',
                detail: data[index].content.message,
              },
            ];
          }
        }
        if (allStatusTrue) {
          this.messageService.add({
            severity: 'success',
            summary: 'Succès',
            detail: '',
          });
          this.checkStatus = true;
        } else {
          this.messageService.add({
            severity: 'error',
            summary: `Il y a ${countFalseStatus} service invalide`,
            detail: '',
          });
        }
        this.spinner.hide('panier');
      },
      (error: any) => {
        console.error(error);
        this.spinner.hide('panier');
      }
    );
  }

  savePanierInSession() {
    sessionStorage.removeItem('paiement');
    let panierTemp = [];
    let employe: any;
    for (let index = 0; index < this.panier.length; index++) {
      this.total = this.total + parseInt(this.panier[index].prix);
      if (this.dataVerif[index].idEmploye === null) {
        employe = 'Avec le premier styliste / thérapeute disponible';
      } else {
        this.dataVerif[index].idEmploye = this.dataVerif[index].idEmploye;
        let employeTemp: any = this.employes.find(
          (employe) => employe._id === this.dataVerif[index].idEmploye
        );
        employe = employeTemp.name;
      }
      panierTemp[index] = {
        dateTime: this.dataVerif[index].date,
        service: this.panier[index].name,
        idService: this.panier[index]._id,
        categorie: this.panier[index].id_Categorie.name,
        employe: this.dataVerif[index].idEmploye,
        prix: this.panier[index].prix,
        duree: this.panier[index].dure,
        image: this.panier[index].image[0].name,
        employeName: employe,
        total: this.total,
      };
    }
    sessionStorage.setItem('paiement', JSON.stringify(panierTemp));
  }

  navigatePaiement() {
    this.savePanierInSession();
    sessionStorage.setItem('url', '/public/paiement');
    if (!this.token) {
      this.router.navigate(['/auth/login']);
    } else {
      sessionStorage.removeItem('service');
      this.router.navigate(['/public/paiement']);
    }
  }
}
