import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightService } from '../flight.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
  @ViewChild('addFlightForm', { static: true}) addFlightData: NgForm;
  constructor() { }

  ngOnInit() {
  }
  getAddFlightData() {
    console.log(this.addFlightData.value);
  }
  // addFlightData(form) {
  //   console.log(form.value);
  //   this.service.addFlightRequest(form.value).subscribe(resp => {
  //     console.log(resp);
  //   }, err => {
  //     console.log(err);
  //   }, () => {
  //     console.log('add flight request is sent');
  //   });
  // }

}
