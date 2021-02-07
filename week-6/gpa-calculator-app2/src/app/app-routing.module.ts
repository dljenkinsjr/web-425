/*============================================;
Title: Assignment 6.4;
Author: Professor Krasso ;
Date: 8 February 2020;
Modified By: Douglas Jenkins;
Description: Input Properties
;===========================================*/

// added over the routes from the app module component
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

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
        ]
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
  // Has and array for child routes so it can use Auth layout
        children: [
          {
            path: 'not-found',
            component: NotFoundComponent
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
