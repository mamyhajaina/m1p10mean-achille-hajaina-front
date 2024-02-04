import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var $toggle = document.getElementsByTagName('body')[0];
    $toggle.classList.add('toggle-sidebar');
  }

}
