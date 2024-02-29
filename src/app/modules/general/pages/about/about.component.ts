import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../../service/employe.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  idClient: any;
  client: any;

  constructor(private userService: EmployeService) {}

  ngOnInit() {
    this.idClient = localStorage.getItem('id');
    this.getClient();
  }

  getClient() {
    this.userService.getClient(this.idClient).subscribe((data: any) => {
      this.client = data;
      console.log(this.client, 'this.client');
    });
  }
}
