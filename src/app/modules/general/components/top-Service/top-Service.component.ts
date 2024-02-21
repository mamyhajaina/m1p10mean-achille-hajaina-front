import { Component, OnInit } from '@angular/core';
import { ServiceSalonService } from '../../service/serviceSalon.service';
import { ServiceSalon } from '../../models/serviceSalon';
import { environments } from 'src/environments/environments';
import { Router } from '@angular/router';
import { slideAnimation } from '../../models/animation';
@Component({
  selector: 'app-top-Service',
  templateUrl: './top-Service.component.html',
  styleUrls: ['./top-Service.component.css'],
  animations: [slideAnimation],
})
export class TopServiceComponent implements OnInit {
  topServiceSalon: ServiceSalon[] = [];
  environments = environments.url_image;
  value: number = 5;

  constructor(
    private serviceSalonService: ServiceSalonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getTopServices();
  }

  getTopServices() {
    this.serviceSalonService.getTopServices().subscribe(
      (res: any) => {
        this.topServiceSalon = res;
      },
      (error: any) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories : ",
          error
        );
      }
    );
  }

  onNavigateServices(product: ServiceSalon) {
    sessionStorage.setItem('service', JSON.stringify(product));
    this.router.navigate(['/public/services']);
  }
}
