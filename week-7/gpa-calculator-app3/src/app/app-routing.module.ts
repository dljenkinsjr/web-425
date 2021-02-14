/*============================================;
Title: Assignment 7.2;
Author: Professor Krasso ;
Date: 13 February 2020;
Modified By: Douglas Jenkins;
Description: Input Exercise 7.2 - Reactive Forms
;===========================================*/

// added over the routes from the app module component
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard';

// creates the routes and added a ** to redirect to the session not found
const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
  // Has and array for child routes so it can use the base layout
        children: [
            {
              path: '',
              component: HomeComponent
            }
        ],
        canActivate: [SignInGuard]
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
  // Has and array for child routes so it can use Auth layout
        children: [
          {
            path: 'not-found',
            component: NotFoundComponent
          },
          {
            path: 'sign-in',
            component: SignInComponent
          }
        ]
  },
  {
    path: "**",
    redirectTo: 'session/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
