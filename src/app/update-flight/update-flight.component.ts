import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {
  @ViewChild('updateFlightForm', { static: true}) updateFlightData: NgForm;

  constructor() { }

  ngOnInit() {
  }
  getUpdateFlightData() {
    console.log(this.updateFlightData.value);
  }

}
