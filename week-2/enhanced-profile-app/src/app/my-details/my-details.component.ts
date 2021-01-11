/*============================================;
Title: Assignment 2.3;
Author: Professor Krasso ;
Date: 4 January 2020;
Modified By: Douglas Jenkins;
Description: Data Binding
;===========================================*/

import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

// creates person to display information
export default class Person{
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
      "#TypeScript", "#2021", "#CodingWithAngular", "#ngOmaha"
    ];
  constructor(fullName: string, favoriteFood: string, favoriteColor: string){
  this.fullName = fullName;
  this.favoriteFood = favoriteFood;
  this.favoriteColor = favoriteColor;
  }
// STRING to display the outputs
  toString(){
    console.log(`\n Full name: ${this.fullName}\n Favorite food:  ${this.favoriteFood}\n Favorite Color:  ${this.favoriteColor} `);
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person;
  constructor() {
    this.myProfile = new Person("Douglas Jenkins", "Pizza", "Blue");
    this.myProfile.toString();
  }

  ngOnInit(): void {
  }

}
