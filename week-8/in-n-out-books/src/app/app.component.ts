/*============================================;
Title: Assignment 8.2;
Author: Professor Krasso ;
Date: 19 February 2020;
Modified By: Douglas Jenkins;
Description: Server Side Communications
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
    this.assignment = "Welcome to In-N-Out-Books";
  }

}
