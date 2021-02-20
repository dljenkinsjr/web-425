/*============================================;
Title: Assignment 8.2;
Author: Professor Krasso ;
Date: 19 February 2020;
Modified By: Douglas Jenkins;
Description: Server Side Communications
;===========================================*/

// Imported the routes so they can be shown
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WishlistComponent } from './wishlist/wishlist.component';

// Routes created to be displayed and wired together
const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
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
  },
  {
    path: "wishlist",
    component: WishlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
