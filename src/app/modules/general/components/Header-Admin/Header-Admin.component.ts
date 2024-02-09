import { Component, OnInit } from '@angular/core';
import { environments } from 'src/environments/environments';

@Component({
  selector: 'app-Header-Admin',
  templateUrl: './Header-Admin.component.html',
  styleUrls: ['./Header-Admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  hideMenus: boolean | undefined = false;
  environments = environments;

  constructor() { }

  ngOnInit() {
  }

  hideMenu() {
    this.hideMenus = !this.hideMenus;
    var $toggle = document.getElementsByTagName('body')[0];
    if (this.hideMenus) {
      $toggle.classList.add('toggle-sidebar');
    } else {
      $toggle.classList.remove('toggle-sidebar');
    }
  }

}
