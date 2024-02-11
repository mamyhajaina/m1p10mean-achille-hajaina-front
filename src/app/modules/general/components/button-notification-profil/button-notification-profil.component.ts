import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/service/auth.service';
import { environments } from 'src/environments/environments';

@Component({
  selector: 'app-button-notification-profil',
  templateUrl: './button-notification-profil.component.html',
  styleUrls: ['./button-notification-profil.component.css'],
})
export class ButtonNotificationProfilComponent implements OnInit {
  dataUserConnected: any = {};
  environments = environments;
  showNotifications: boolean = false;
  showProfil: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.dataUserConnected.token = localStorage.getItem('token');
    this.dataUserConnected.username = localStorage.getItem('user');
    this.dataUserConnected.id = localStorage.getItem('id');
    this.dataUserConnected.role = localStorage.getItem('role');
    this.dataUserConnected.email = localStorage.getItem('email');
    console.log(this.dataUserConnected);
  }

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
  }

  toggleProfil(): void {
    this.showProfil = !this.showProfil;
  }

  logout() {
    this.authService.logout(this.dataUserConnected.token).subscribe(() => {});
  }
}
