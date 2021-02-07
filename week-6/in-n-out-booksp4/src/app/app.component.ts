/*============================================;
Title: Assignment 6.2;
Author: Professor Krasso ;
Date: 7 February 2020;
Modified By: Douglas Jenkins;
Description: Input/Output Properties, Part 1
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
    this.assignment = "Exercise 6.2 - Input/Output Properties, Part 1";
  }

}
