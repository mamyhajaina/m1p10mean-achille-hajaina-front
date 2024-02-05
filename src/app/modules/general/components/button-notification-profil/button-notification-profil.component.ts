import { Component, OnInit } from '@angular/core';
import { environments } from 'src/environments/environments';

@Component({
  selector: 'app-button-notification-profil',
  templateUrl: './button-notification-profil.component.html',
  styleUrls: ['./button-notification-profil.component.css']
})
export class ButtonNotificationProfilComponent implements OnInit {

  environments = environments;
  isNotificationsOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNotifications(event: Event): void {
    event.preventDefault(); // Empêcher la redirection par défaut
    this.isNotificationsOpen = !this.isNotificationsOpen;
  }

}
