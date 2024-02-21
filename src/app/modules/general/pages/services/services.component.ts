import { Component, OnInit } from '@angular/core';
import { ServiceSalon } from '../../models/serviceSalon';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  rangeDates: Date[] | undefined;
  value: string | undefined;
  valueRating: number = 5;
  service: ServiceSalon = new ServiceSalon();

  constructor(private router: Router, private location: Location) {}

  countries: any[] = [];

  selectedCountry: string | undefined;

  ngOnInit() {
    sessionStorage.setItem('url', this.location.path());
    sessionStorage.removeItem('panier');
    const serviceString = sessionStorage.getItem('service');
    this.service = serviceString ? JSON.parse(serviceString) : [];
    this.countries = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' },
    ];
  }

  loading: boolean = false;

  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  onNavigateSalon() {
    sessionStorage.setItem('panier', JSON.stringify([this.service]));
    this.router.navigate(['/public/salon']);
  }
}
