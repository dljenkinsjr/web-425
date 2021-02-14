/*============================================;
Title: Assignment 7.3;
Author: Professor Krasso ;
Date: 13 February 2020;
Modified By: Douglas Jenkins;
Description: GPA Calculator
;===========================================*/

// added the import statement fot 7.3
import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

// creates a type string to pass the information
  signinForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) {
    console.log(this.cookieService.get('session_user'));
   }

// builds out the information so you can properly sign in.
  ngOnInit(): void {
// this is how you create reactive forms
    this.signinForm = this.fb.group({
      studentId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    })
  }

// this is what happens when a user clicks the submit button
  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

// this how you set the cookie in browser as it takes the data and uses it
    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1)
      this.router.navigate(['/'])
    } else {
      this.errorMessage = `The student ID you entered is invalid, please try again.`;
    }
  }

// adds a get() function that will return the sign in component
  get form(){
    return this.signinForm.controls;
  }

}
