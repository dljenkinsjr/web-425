/*============================================;
Title: Assignment 3.4;
Author: Professor Krasso ;
Date: 15 January 2020;
Modified By: Douglas Jenkins;
Description: Guarding Routes
;===========================================*/

//imports the router
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isLoggedIn = false;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }
  //allows you to sign in
  signin() {
    this.isLoggedIn = true;

  //once correct it will navigate to the home page
    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }

}
