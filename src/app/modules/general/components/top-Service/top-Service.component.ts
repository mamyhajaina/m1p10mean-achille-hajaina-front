import { Component, OnInit } from '@angular/core';
import { ServiceSalonService } from '../../service/serviceSalon.service';
import { ServiceSalon } from '../../models/serviceSalon';

@Component({
  selector: 'app-top-Service',
  templateUrl: './top-Service.component.html',
  styleUrls: ['./top-Service.component.css']
})
export class TopServiceComponent implements OnInit {

  topServiceSalon: ServiceSalon[] = [];

  constructor(
    private serviceSalonService: ServiceSalonService
  ) { }

  ngOnInit() {
    this.getTopServices();
  }

  getTopServices() {
    this.serviceSalonService.getTopServices().subscribe(
      (res: any) => {
        this.topServiceSalon = res;
        console.log('this.serviceSalon', this.topServiceSalon);
      },
      (error: any) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories : ",
          error
        );
      }
    );
  };

}