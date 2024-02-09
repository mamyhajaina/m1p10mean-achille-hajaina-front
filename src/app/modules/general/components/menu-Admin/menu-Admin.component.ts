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
    console.log('isMenuOpen', this.isMenuOpen, 'typeMenu', this.typeMenu);

    if (this.typeMenu == 'client') {
      this.menu = Menu.menuClient;
      console.log("menu: " + this.menu);
    }
    else if (this.typeMenu == 'employe') {
      this.menu = Menu.menuEmploye;
    }
    else if (this.typeMenu == 'manager') {
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
