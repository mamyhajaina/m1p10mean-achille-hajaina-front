import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-prise-rendez-vous',
  templateUrl: './prise-rendez-vous.component.html',
  styleUrls: ['./prise-rendez-vous.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PriseRendezVousComponent implements OnInit {

  @Input() visible: boolean = false;
  date: Date[] | undefined;

  constructor() { }

  ngOnInit() {
  }

}
