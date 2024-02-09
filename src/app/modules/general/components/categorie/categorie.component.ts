import { Component, OnInit } from '@angular/core';
import { environments } from 'src/environments/environments';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  environments = environments;

  constructor() { }

  ngOnInit() {
  }

}
