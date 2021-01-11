/*============================================;
Title: Assignment 2.3;
Author: Professor Krasso ;
Date: 4 January 2020;
Modified By: Douglas Jenkins;
Description: Data Binding
;===========================================*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//creates a string for the h2 header
export class AppComponent {
  isLoggedIn: Boolean = true;
  assignment: string = "Exercise 2.3 - Data Binding";
}
