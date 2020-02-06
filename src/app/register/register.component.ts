import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      'fullname' : [null, Validators.required],
      'email' : [null, [Validators.required, Validators.email]],
      'password' : [null, Validators.required]
    });
  }
  onFormSubmit(form:NgForm) {
    this.api.postUserRegister(form)
    .subscribe(res => {
      this.router.navigate(['/']);
    }, (err) => {
      console.log(err);
    });
  }
  cancel(){
    this.router.navigate(['/']);
  }
  // getFirstNameErrorMessage() {
  //   return this.firstname.hasError('required') ? 'Please Enter Your First Name':'';
  // }
  // getEmailErrorMessage() {
  //   return this.email.hasError('required') ? 'Please Enter Your Email ID' :
  //          this.email.hasError('email') ? 'Incorrect Email Id' : '';
  // }
  // getPasswordErrorMessage() {
  //   return this.password.hasError('required') ? 'Please Enter Your Password' : '';
  // }
}
