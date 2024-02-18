import { Component, OnInit, HostListener } from '@angular/core';
import { CategorieService } from '../../service/categorie.service';
import { Categorie } from '../../models/categorie';
import { io, Socket } from 'socket.io-client';
import { NgxSpinnerService } from 'ngx-spinner';
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

  constructor(
    private categorieService: CategorieService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.getAllCategories();
    this.socket = io('http://localhost:1200');
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
}
