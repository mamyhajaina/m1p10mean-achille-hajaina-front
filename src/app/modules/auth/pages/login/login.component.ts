import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { User } from '../../model/model';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  username: string = '';
  password: string = '';
  token: any;
  checkToken: boolean = false;

  constructor(
    private messageService: MessageService,
    private router: Router,
    private authService: AuthService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
  }

  registerUser() {
    this.spinner.show('register');
    this.authService.register(this.user).subscribe(
      () => {
        this.checkToken = false;
        this.user = new User();
        this.messageService.add({
          key: 'tc',
          severity: 'success',
          summary: 'Success',
          detail: 'User enregistrer avec succèes',
        });
        this.spinner.hide('register');
      },
      (error: any) => {
        this.messageService.add({
          key: 'tc',
          severity: 'error',
          summary: 'Error',
          detail: `Une produit s'est produite, veuillez ressayer ou changer le username`,
        });
        this.spinner.hide('register');
        console.error(error);
      }
    );
  }

  login() {
    this.spinner.show('login');
    this.authService.login(this.username, this.password).subscribe(
      (res: any) => {
        if (res) {
          console.log('res', res);

          const { token, username, _id, role, email, adresse, pays, emplois, salaire, image } = res;
          localStorage.setItem('token', token);
          localStorage.setItem('user', username);
          localStorage.setItem('id', _id);
          localStorage.setItem('role', role);
          localStorage.setItem('email', email);
          localStorage.setItem('pays', pays);
          localStorage.setItem('adresse', adresse);
          localStorage.setItem('emplois', emplois);
          localStorage.setItem('salaire', salaire);
          localStorage.setItem('image', image);
          this.spinner.hide('login');
          this.navigateHome(role);
        }
      },
      (error: any) => {
        this.checkToken = true;
        this.spinner.hide('login');
        console.error(error);
      }
    );
  }

  navigateHome(role: string) {
    if (role === 'Emploie') {
      this.router.navigate(['/employe']);
    }
    else if (role === 'Manager') {
      this.router.navigate(['/manager']);
    }
    else if (role === 'Client') {
      this.router.navigate(['/home']);
    }
  }

  logout() {
    this.authService.logout(this.token).subscribe((message) => {
      this.ngOnInit();
    });
  }

  changePassword() { }
}
