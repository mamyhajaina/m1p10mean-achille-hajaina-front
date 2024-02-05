import { Component, OnInit } from '@angular/core';
import { environments } from 'src/environments/environments';

@Component({
  selector: 'app-logo-and-name-site',
  templateUrl: './logo-and-name-site.component.html',
  styleUrls: ['./logo-and-name-site.component.css']
})
export class LogoAndNameSiteComponent implements OnInit {

  environments = environments;

  constructor() { }

  ngOnInit() {
  }

}
