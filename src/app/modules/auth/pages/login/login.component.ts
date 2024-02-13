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
  disabledlogin: boolean = false;

  constructor(
    private messageService: MessageService,
    private router: Router,
    private authService: AuthService,
    private spinner: NgxSpinnerService
  ) {}

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
    this.disabledlogin = true;
    this.authService.login(this.username, this.password).subscribe(
      (res: any) => {
        if (res) {
          const { token, username, _id, role, email } = res;
          localStorage.setItem('token', token);
          localStorage.setItem('user', username);
          localStorage.setItem('id', _id);
          localStorage.setItem('role', role);
          localStorage.setItem('email', email);
          this.disabledlogin = false;
          this.navigateHome();
        }
      },
      (error: any) => {
        this.disabledlogin = false;
        this.checkToken = true;
        console.error(error);
      }
    );
  }

  navigateHome() {
    this.router.navigate(['/home']);
  }

  logout() {
    this.authService.logout(this.token).subscribe((message) => {
      this.ngOnInit();
    });
  }

  changePassword() {}
}
