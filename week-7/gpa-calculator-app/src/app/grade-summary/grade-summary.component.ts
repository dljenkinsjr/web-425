/*============================================;
Title: Assignment 7.2;
Author: Professor Krasso ;
Date: 13 February 2020;
Modified By: Douglas Jenkins;
Description: Input Exercise 7.2 - Reactive Forms
;===========================================*/


import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  @Input() grade: string;
  @Input() course: string;


  constructor() {

  }

  ngOnInit(): void {
  }
}
