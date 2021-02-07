/*============================================;
Title: Assignment 6.4;
Author: Professor Krasso ;
Date: 8 February 2020;
Modified By: Douglas Jenkins;
Description: Input Properties
;===========================================*/
import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

// Added a variables for the ITranscript, grades, gpa and entries to be called
transcriptEntry: ITranscript;
selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
transcriptEntries: Array<ITranscript> = [];
gpaTotal: number = 0;

  constructor() {
    this.transcriptEntry = {} as ITranscript;
   }

  ngOnInit(): void {
  }

// sets the function so this information can be pushed
  saveEntry(){
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript;
  }

  // creates a function that will calculate the results
  calculateResults(){
    let gpa: number = 0;

// loops the grade and how much it counts towards the gpa

 for (let entry of this.transcriptEntries) {
  switch(entry.grade) {
    case 'A': gpa += 4.0;
    break;
    case 'A-': gpa += 3.7;
    break;
    case 'B+': gpa+= 3.33;
    break;
    case 'B': gpa+= 3.00;
    break;
    case 'B-': gpa+= 2.70;
    break;
    case 'C+': gpa+= 2.30;
    break;
    case 'C': gpa+= 2.00;
    break;
    case 'C-': gpa+= 1.70;
    break;
    case 'D+': gpa+= 1.30;
    break;
    case 'D': gpa+= 1.00;
    break;
    case 'D-': gpa+= 1.30;
    break;
    case 'F': gpa+= 0.00;
    break;
  }
}

// this is going to calculate the total gpa
  this.gpaTotal = gpa / this.transcriptEntries.length;
  }

  clearEntries() {
  this.transcriptEntries = [];
  this.gpaTotal = 0;
  }

}
