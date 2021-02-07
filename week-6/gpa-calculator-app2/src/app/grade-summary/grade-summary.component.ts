/*============================================;
Title: Assignment 6.4;
Author: Professor Krasso ;
Date: 8 February 2020;
Modified By: Douglas Jenkins;
Description: Input Properties
;===========================================*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

// added two input values for the strings
  @Input() grade: string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
