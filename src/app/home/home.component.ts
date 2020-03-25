import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Flight } from '../flight';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  flight: Flight[];
  @ViewChild('getFlight', {static: true}) getFlightData: NgForm;
  constructor(public service: FlightService, public router: Router) { }

  ngOnInit() {}
}
