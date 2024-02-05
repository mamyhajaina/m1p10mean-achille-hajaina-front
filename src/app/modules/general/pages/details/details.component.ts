import { Component, OnInit } from '@angular/core';
import { environments } from 'src/environments/environments';
import { MatDialog } from '@angular/material/dialog';
import { PriseRendezVousComponent } from '../../components/prise-rendez-vous/prise-rendez-vous.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  environments = environments;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  priseRendezVous() {
    this.showPopupPriseRendezVous();
  }

  showPopupPriseRendezVous() {
    this.dialog.open(PriseRendezVousComponent, {
      width: '70%'
    })
  }

}
