import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  visible: boolean = false;
  rangeDates: Date[] | undefined;
  value: string | undefined;
  valueRating: number = 5;

  constructor() {}

  countries: any[] = [];

  selectedCountry: string | undefined;

  ngOnInit() {
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

    this.images = [
      {
        name: 'image',
        itemImageSrc: '../../../../../assets/assets/img/product-1.jpg',
      },
      {
        name: 'image',
        itemImageSrc: '../../../../../assets/assets/img/product-2.jpg',
      },
      {
        name: 'image',
        itemImageSrc: '../../../../../assets/assets/img/product-3.jpg',
      },
    ];
  }

  showDialog() {
    this.visible = true;
  }

  loading: boolean = false;

  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  images: any[] = [];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
}
