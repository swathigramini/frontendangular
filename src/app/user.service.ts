import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  backendURL = 'http://localhost:8081/users';

  constructor(public http: HttpClient) { }
  registerRequest(data) {
    console.log('service', data);
    return this.http.post(`${this.backendURL}/register`, data);
  }

  loginRequest(data): any {
    return this.http.post(`${this.backendURL}/login`, data);
  }
}
