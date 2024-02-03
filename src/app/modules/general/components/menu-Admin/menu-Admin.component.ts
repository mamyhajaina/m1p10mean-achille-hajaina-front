import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../../models/menuItem';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-menu-Admin',
  templateUrl: './menu-Admin.component.html',
  styleUrls: ['./menu-Admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  @Input() typeMenu?: string = '';
  menu: MenuItem[] = [];
  isMenuOpen = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if (this.typeMenu == 'client') {
      this.menu = Menu.menuClient;
      console.log("menu: " + this.menu);
    } else {
      this.menu = Menu.menuManager;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  nafigate(route: any) {
    this.router.navigate([route]);
  }

}
