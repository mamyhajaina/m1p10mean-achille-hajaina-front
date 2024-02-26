import { Component, OnInit, HostListener } from '@angular/core';
import { CategorieService } from '../../service/categorie.service';
import { Categorie } from '../../models/categorie';
import { io, Socket } from 'socket.io-client';
import { NgxSpinnerService } from 'ngx-spinner';
import { environments } from 'src/environments/environments';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  value: String = '';
  categories: Categorie[] = [];
  categorie: Categorie = new Categorie();
  socket!: Socket;
  search = {
    categorie: '',
    service: '',
  };
  responseSearchService: any[] = [];

  constructor(
    private categorieService: CategorieService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit() {
    sessionStorage.clear();
    this.spinner.show();
    this.getAllCategories();
    this.socket = io(environments.BASE_URL);
    this.socket.on('newCategoryAdded', () => {
      this.getAllCategories();
    });
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!(event.target as HTMLElement).closest('.host-listner')) {
      this.showDiv50 = false;
    }
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

  createCategorie() {
    this.categorieService.createCategorie(this.categorie).subscribe(
      () => {
        this.socket.emit('newCategoryAdded');
        this.categorie = new Categorie();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  showDiv50: boolean = false;

  toggleDiv50(data: boolean) {
    this.showDiv50 = data;
  }

  levenshteinDistance(a: string, b: string) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }

    return matrix[b.length][a.length];
  }

  searchProduit() {
    console.log(this.search);
    let responseSearchService: any;
    responseSearchService = this.categories.filter((category) => {
      return (
        this.levenshteinDistance(
          category.name.toLowerCase(),
          this.search.categorie.toLowerCase()
        ) <= 4
      );
    });
    responseSearchService = responseSearchService[0];
    this.responseSearchService = responseSearchService.service.filter(
      (service: any) => {
        return service.name
          .toLowerCase()
          .includes(this.search.service.toLowerCase());
      }
    );
    if (this.responseSearchService.length) {
      sessionStorage.setItem(
        'service',
        JSON.stringify(this.responseSearchService[0])
      );
      this.router.navigate(['/public/services']);
    }
  }
}
