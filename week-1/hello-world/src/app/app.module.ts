/*============================================;
Title: Assignment 1.3;
Author: Professor Krasso ;
Date: 19 December 2020;
Modified By: Douglas Jenkins;
Description: Hello World
;===========================================*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
