import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @ViewChild('loginForm', { static: true}) loginValues: NgForm;
  constructor(public service: UserService) { }

  ngOnInit() {
  }
  registerData(form) {
    console.log(form.value);
    this.service.registerRequest(form.value).subscribe(resp => {
      console.log('backend response', resp);
    }, err => {
      console.log(err);
      console.log('register request is gone');
    });
  }

}
