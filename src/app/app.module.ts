import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FlightComponent } from './flight/flight.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { TicketBookingDetailsComponent } from './ticket-booking-details/ticket-booking-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FlightComponent,
    AddFlightComponent,
    UpdateFlightComponent,
    BookTicketComponent,
    FlightDetailsComponent,
    TicketBookingDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, data: { expectedRole: ['user'] } },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'add-flight', component: AddFlightComponent, data: { expectedRole: ['admin'] } },
      { path: 'book-ticket', component: BookTicketComponent, data: { expectedRole: ['user'] } },
      { path: 'update-flight', component: UpdateFlightComponent, data: { expectedRole: ['admin'] } },
      {
        path: 'flight', component: FlightComponent, data: { expectedRole: ['user'] }, children: [
          { path: 'flight-details', component: FlightDetailsComponent }]
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
