/*============================================;
Title: Assignment 5.2;
Author: Professor Krasso ;
Date: 30 January 2020;
Modified By: Douglas Jenkins;
Description: Navigation and Layout
;===========================================*/

// Imported the routes so they can be shown
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


// Routes created to be displayed and wired together
const routes: Routes = [
  {
    path: "book-list",
    component: BookListComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "about",
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
