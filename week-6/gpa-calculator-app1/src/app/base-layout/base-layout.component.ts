/*============================================;
Title: Assignment 6.3;
Author: Professor Krasso ;
Date: 7 February 2020;
Modified By: Douglas Jenkins;
Description: Layouts
;===========================================*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
// creates the name for the assignment
  assignment: string;

  constructor() {
    this.assignment = "Exercise 6.3 - Layouts"
   }

  ngOnInit(): void {
  }

}
