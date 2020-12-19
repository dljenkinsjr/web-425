/*============================================; 
Title: Assignment 1.4; 
Author: Professor Krasso ; 
Date: 19 December 2020; 
Modified By: Douglas Jenkins; 
Description: Person Class that will implement name
;===========================================*/

// imports the iperson interface
import { IPerson } from "./person.interface";

// creates a class to show name
class Person implements IPerson {
    firstName: string;
    lastName: string;

        constructor(firstName: string, lastName: string){
            this.firstName = firstName;
            this.lastName = lastName;
        }
}

// creating a new person object

let myName = new Person("Douglas", "Jenkins");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);