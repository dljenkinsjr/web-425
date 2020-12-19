/*============================================;
Title: Assignment 1.5;
Author: Professor Krasso ;
Date: 19 December 2020;
Modified By: Douglas Jenkins;
Description: Components
;===========================================*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//creates a string for the h2 header
export class AppComponent {
  assignment = "Assignment 1.5 - Components"
}
