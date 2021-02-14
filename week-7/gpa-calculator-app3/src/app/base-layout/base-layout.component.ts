/*============================================;
Title: Assignment 7.2;
Author: Professor Krasso ;
Date: 13 February 2020;
Modified By: Douglas Jenkins;
Description: Input Exercise 7.2 - Reactive Forms
;===========================================*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
// creates the name for the assignment
  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = "Exercise 7.2 - Reactive Forms"
   }

  ngOnInit(): void {
  }

  // allows user to sign out
  signOut(){
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }

}
