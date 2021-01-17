/*============================================;
Title: Assignment 3.3;
Author: Professor Krasso ;
Date: 15 January 2020;
Modified By: Douglas Jenkins;
Description: Passing Data to Routes Part 2
;===========================================*/

// imports from angular routes
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent} from './sign-in/sign-in.component';

// routing file created for home component and sign in
export const AppRoutes:  Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
]



