/*============================================;
Title: Assignment 7.2;
Author: Professor Krasso ;
Date: 13 February 2020;
Modified By: Douglas Jenkins;
Description: Input Exercise 7.2 - Reactive Forms
;===========================================*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

// allows a value to be added to the student ID
  studentIds: Array<number>;

// student ids that are going to be created
  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

// accepts one value to be validated
  validate(studentId: number){
    // allows to search over the array
    return this.studentIds.some(id => id === studentId);
  }
}
