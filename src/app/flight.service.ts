import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  getAllFlightRequest() {
    throw new Error("Method not implemented.");
  }
  backendURL = 'http://localhost:8080/flightInfo';
  selectedFlight;
  constructor(public http: HttpClient) { }
  addFlightRequest(data) {
    return this.http.post(`${this.backendURL}/addFlight`, data);
  }

  getAllProductsRequest(): any {
    return this.http.get(`${this.backendURL}/getAllFlights`);
  }

  updateProductRequest(data) {
    return this.http.put(`${this.backendURL}/updateFlight/${data.id}`, data);
  }

  deleteProductRequest(data) {
     return this.http.delete(`${this.backendURL}/deleteFlight/${data.id}`);
  }

}
