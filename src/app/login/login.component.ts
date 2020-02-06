import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import {MatDialog} from '@angular/material';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //email = new FormControl('', [Validators.required, Validators.email]);
  //password = new FormControl('', [Validators.required]);

  userForm: FormGroup;
  email: string = '';
  message = '';
  data: any;

  constructor(private router: Router, private apiService: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      'email' : [null, [Validators.required, Validators.email]],
      'password' : [null, Validators.required]
    });
    if(this.apiService.isLoggedIn()){
      this.router.navigateByUrl('/books');
    }
  }

  onFormSubmit(form:NgForm) {
    this.apiService.postUserLogin(form)
    .subscribe(res => {
        this.apiService.setToken(res['token']);
        this.router.navigateByUrl('/books');
      },
      (err) => {
        console.log(err);
      }
    );
  }

   register(){
     this.router.navigate(['/register']);
   }

   private handleError<T> (operation = 'operation', result?: T) {
     return (error: any): Observable<T> => {
       console.error(error); // log to console instead
       console.log(`${operation} failed: ${error.message}`);
       return of(result as T);
     };
   }

   // getEmailErrorMessage() {
   //   return this.email.hasError('required') ? 'Please Enter Your Email ID' :
   //          this.email.hasError('email') ? 'Incorrect Email Id' :
   //           '';
   // }
   //
   // getPasswordErrorMessage() {
   //   return this.password.hasError('required') ? 'Please Enter Your Password' :
   //           '';
   // }

}
