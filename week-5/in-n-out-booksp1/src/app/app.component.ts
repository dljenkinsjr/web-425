/*============================================;
Title: Assignment 5.2;
Author: Professor Krasso ;
Date: 30 January 2020;
Modified By: Douglas Jenkins;
Description: Navigation and Layout
;===========================================*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// created a string value to display the assignment name
export class AppComponent {
  assignment: string;

  constructor(){
    this.assignment = "Exercise 5.2 - Navigation and Layout";
  }

}
