
/*============================================;
Title: Assignment 1.3;
Author: Professor Krasso ;
Date: 19 December 2020;
Modified By: Douglas Jenkins;
Description: Hello World
;===========================================*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//creates the messages that is displayed
export class AppComponent {
  myWorld = "You are now in Douglas Jenkins's World!!"
}
