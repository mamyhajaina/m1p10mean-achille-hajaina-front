import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../../service/categorie.service';
import { Categorie } from '../../models/categorie';
import { io, Socket } from 'socket.io-client'; // Importez Socket depuis 'socket.io-client'
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

  constructor(private categorieService: CategorieService) {}

  ngOnInit() {
    this.getAllCategories();
    this.socket = io('http://localhost:1200');
    this.socket.on('newCategoryAdded', () => {
      this.getAllCategories();
    });
  }

  getAllCategories() {
    this.categorieService.getAllCategorie().subscribe(
      (res: any) => {
        this.categories = res;
      },
      (error: any) => {
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
}
