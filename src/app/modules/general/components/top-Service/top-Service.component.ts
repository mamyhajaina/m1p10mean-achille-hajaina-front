import { Component, OnInit } from '@angular/core';
import { ServiceSalonService } from '../../service/serviceSalon.service';
import { ServiceSalon } from '../../models/serviceSalon';
import { environments } from 'src/environments/environments';
import { Router } from '@angular/router';
import { slideAnimation } from '../../models/animation';
import { CategorieService } from '../../service/categorie.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmployeService } from '../../service/employe.service';
@Component({
  selector: 'app-top-Service',
  templateUrl: './top-Service.component.html',
  styleUrls: ['./top-Service.component.scss'],
  animations: [slideAnimation],
})
export class TopServiceComponent implements OnInit {
  topServiceSalon: any[] = [];
  environments = environments.url_image;
  value: number = 5;
  id_client: any;
  preference: any[] = [];
  responsiveOptions: any[] = [];
  visbleSsl: boolean = false;
  visible: boolean = false;
  categories: any;
  responseSearchService: any = [];
  selectedCategorie: any;
  bodySave = {
    Categorie: '',
    Service: '',
    Employe: '',
    Client: '',
  };
  employerCat: any[] = [];
  responseCategorie: any = [];

  constructor(
    private serviceSalonService: ServiceSalonService,
    private categorieService: CategorieService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private employeService: EmployeService
  ) {}

  ngOnInit() {
    this.id_client = localStorage.getItem('id');
    if (!this.id_client) {
      this.visbleSsl = true;
    } else {
      this.visbleSsl = false;
    }
    this.getTopServices();
    this.getPreference();
    this.getAllEmployeByCat();
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
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

  getPreference() {
    this.serviceSalonService
      .getPreference(this.id_client)
      .subscribe((data: any) => {
        this.preference = data;
      });
  }

  onNavigateServices(product: ServiceSalon) {
    sessionStorage.setItem('service', JSON.stringify(product));
    this.router.navigate(['/public/services']);
  }

  deletePreference(id: any) {
    const body = {
      id: id,
    };
    this.serviceSalonService.clearPreference(body).subscribe((data: any) => {});
  }

  addPreference() {
    this.getAllCategories();
    this.visible = true;
  }

  getAllCategories() {
    this.categorieService.getAllCategorie().subscribe(
      (res: any) => {
        this.categories = res.categories;
        this.spinner.hide();
      },
      (error: any) => {
        this.spinner.hide();
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories : ",
          error
        );
      }
    );
  }

  showService(data: any) {
    this.bodySave.Categorie = data.target.value;
    this.findCategoriesByName(data.target.value);
    this.getEmployesByCat(data.target.value);
  }

  findCategoriesByName(name: string) {
    this.responseSearchService = this.categories.filter((category: any) => {
      category._id === name;
      return this.responseSearchService;
    });

    this.responseSearchService = this.responseSearchService[0];

    return this.responseSearchService;
  }

  setService(data: any) {
    this.bodySave.Service = data.target.value;
  }

  getAllEmployeByCat() {
    this.employeService.getAllEmployeByEmploye().subscribe((data: any[]) => {
      this.employerCat = data;
    });
  }

  getEmployesByCat(catId: string) {
    this.responseCategorie = this.employerCat.find(
      (cat) => cat.idCat === catId
    );
  }

  getIdEmpl(data: any) {
    this.bodySave.Employe = data.target.value;
  }

  savePreference() {
    const idClient = localStorage.getItem('id');
    if (idClient) {
      this.bodySave.Client = idClient;
    }
    this.serviceSalonService
      .savePreference(this.bodySave)
      .subscribe((data: any) => {
        this.visible = false;
      });
  }
}
