import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightDetailsService {
  backendURL = 'http://localhost:8081/flightDetails';
  selectedFlight;
  constructor(public http: HttpClient) { }
  addFlightRequest(data) {
    return this.http.post(`${this.backendURL}/addFlight`, data);
  }

  getAllFlightsRequest(): any {
    return this.http.get(`${this.backendURL}/getFlightDetails`);
  }

  updateFlightRequest(data) {
    return this.http.put(`${this.backendURL}/updateFlight/${data.id}`, data);
  }

  deleteFlightRequest(data) {
     return this.http.delete(`${this.backendURL}/deleteFlight/${data.id}`);
  }

}
