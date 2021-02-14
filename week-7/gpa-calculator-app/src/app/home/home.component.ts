/*============================================;
Title: Assignment 7.3;
Author: Professor Krasso ;
Date: 13 February 2020;
Modified By: Douglas Jenkins;
Description: GPA Calculator
;===========================================*/
import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

// Added a variables for the ITranscript, grades, gpa and entries to be called
selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
transcriptEntries: Array<ITranscript> = [];
gpaTotal: number = 0;
transcriptForm: FormGroup;

  constructor(private fb: FormBuilder) {

   }

// the formBuilder will be used here to build a new formGroup
  ngOnInit(): void {
    this.transcriptForm = this.fb.group({course:['', Validators.required],
    grade: ['', Validators.required]
    });
  }

// a get function that will return the the transcript form
  get form(){
    return this.transcriptForm.controls;
  }

// sets the function so this information can be pushed
  onSubmit(event){
    this.transcriptEntries.push({ course: this.form.course.value,
    grade: this.form.grade.value
    });
    event.currentTarget.reset();
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
