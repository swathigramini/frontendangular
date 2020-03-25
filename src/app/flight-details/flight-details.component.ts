import { Component, OnInit } from '@angular/core';
import { FlightDetailsService } from '../flight-details.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  flight: FlightDetailsService[];

  constructor(public service: FlightDetailsService, public router: Router) { }

ngOnInit() {
}

}
