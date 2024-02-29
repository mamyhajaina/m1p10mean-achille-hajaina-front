import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/service/auth.service';
import { environments } from 'src/environments/environments';
import { OffreSpecialeService } from '../../service/offreSpeciale.service';
import { RendezVousService } from '../../service/rendez-vous.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { io, Socket } from 'socket.io-client';
@Component({
  selector: 'app-button-notification-profil',
  templateUrl: './button-notification-profil.component.html',
  styleUrls: ['./button-notification-profil.component.css'],
})
export class ButtonNotificationProfilComponent implements OnInit {
  dataUserConnected: any = {};
  environments = environments;
  showNotifications: boolean = false;
  showProfil: boolean = false;
  dataOffreSpeciale: any[] = [];
  visible: boolean = false;
  katan: any;
  image: any;
  name: any;
  cat: any;
  prix: any;
  emplo: any;
  date: any;
  heure: any;
  montant: any;
  id_client: any;
  somme: number = 0;
  socket!: Socket;

  constructor(
    private authService: AuthService,
    private offreSpecialeService: OffreSpecialeService,
    private rendezVousService: RendezVousService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.dataUserConnected.token = localStorage.getItem('token');
    this.dataUserConnected.username = localStorage.getItem('user');
    this.dataUserConnected.id = localStorage.getItem('id');
    this.dataUserConnected.role = localStorage.getItem('role');
    this.dataUserConnected.email = localStorage.getItem('email');
    this.dataUserConnected.image = localStorage.getItem('image');
    this.getOffreSpec();
    this.socket = io(environments.BASE_URL);
    this.socket.on('newUpdateOffre', () => {
      this.getOffreSpec();
    });
    this.socket.on('newAddOffre', () => {
      this.getOffreSpec();
    });
  }

  getOffreSpec(): void {
    this.somme = 0;
    this.offreSpecialeService.getAllOffreSpeciale().subscribe(
      (data: any) => {
        this.dataOffreSpeciale = data;
        for (let index = 0; index < data.length; index++) {
          if (data[index].vue === true) {
            this.somme += 1;
          }
        }
      },
      (error: any) => {
        console.error(
          'Une erreur est survenue lors de la récupération des offres spéciales :',
          error
        );
      }
    );
  }

  payer() {
    const body = [
      {
        idClient: this.dataUserConnected.id,
        service: this.katan.Service._id,
        date: this.date.toString().concat(` ` + this.heure),
        payer: this.montant,
        idEmploye: null,
      },
    ];
    this.rendezVousService
      .setRendezVous(body, this.dataUserConnected.token)
      .subscribe((data: any) => {
        let bodyPaiement: any[] = [];
        bodyPaiement[0] = {
          idRendezVous: data[0].id,
          montant: this.montant,
        };
        this.rendezVousService
          .payer(bodyPaiement, this.dataUserConnected.token)
          .subscribe(() => {
            this.messageService.add({
              severity: 'success',
              summary: 'Confirmé',
              detail: 'Prise de rendez-vous succèes',
            });
            this.router.navigate(['/public/client']);
            this.visible = false;
          });
      });
  }

  updateOffre(id: any, product: any): void {
    this.katan = product;
    this.image = product.Service.image[0].name;
    this.name = product.Service.name;
    this.cat = product.Service.id_Categorie.name;
    this.prix = product.Service.prix;
    const body = {
      idOffre: id,
    };
    this.offreSpecialeService.updateOffreSpeciale(body).subscribe(
      (data: any) => {
        this.socket.emit('newUpdateOffre');
        this.visible = true;
      },
      (error: any) => {
        console.error(
          'Une erreur est survenue lors de la récupération des offres spéciales :',
          error
        );
      }
    );
  }

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
  }

  toggleProfil(): void {
    this.showProfil = !this.showProfil;
  }

  logout() {
    this.authService.logout(this.dataUserConnected.token).subscribe(() => {});
  }
}
