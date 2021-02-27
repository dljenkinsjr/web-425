/*============================================;
Title: Assignment 9.3;
Author: Professor Krasso ;
Date: 26 February 2020;
Modified By: Douglas Jenkins;
Description: Bob's Computer Repair
;===========================================*/

// added import states so the routes can be functional
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthLayoutComponent} from './auth-layout/auth-layout.component';

// creates the navigation so it can be properly routed together
const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'service-list',
    component: ServiceListComponent
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
    path: 'contact',
    component: ContactComponent
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
