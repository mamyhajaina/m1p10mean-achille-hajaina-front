import { Component, OnInit } from '@angular/core';
import { environments } from 'src/environments/environments';

@Component({
  selector: 'app-button-notification-profil',
  templateUrl: './button-notification-profil.component.html',
  styleUrls: ['./button-notification-profil.component.css']
})
export class ButtonNotificationProfilComponent implements OnInit {

  environments = environments;
  showNotifications: boolean = false;
  showProfil: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
  }

  toggleProfil(): void {
    this.showProfil = !this.showProfil;
  }

}
