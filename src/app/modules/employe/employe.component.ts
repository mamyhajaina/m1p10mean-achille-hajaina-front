import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css', './../../../assets/assets/css/style.css']
})
export class EmployeComponent implements OnInit {

  token: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    if (this.token === '' || this.token === null) {
      this.router.navigate(['/auth']);
    }
  }

}
