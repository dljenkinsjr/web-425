/*============================================;
Title: Assignment 3.4;
Author: Professor Krasso ;
Date: 15 January 2020;
Modified By: Douglas Jenkins;
Description: Guarding Routes
;===========================================*/

// imports from angular routes
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent} from './sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard';

// routing file created for home component and sign in
export const AppRoutes:  Routes = [
  {
    path: '',
    component: SignInComponent
  },
  // imported sign in guard
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignInGuard]

  }
]



