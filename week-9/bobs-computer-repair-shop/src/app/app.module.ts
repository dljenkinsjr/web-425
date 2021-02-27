/*============================================;
Title: Assignment 9.3;
Author: Professor Krasso ;
Date: 26 February 2020;
Modified By: Douglas Jenkins;
Description: Bob's Computer Repair
;===========================================*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { StatementDialogComponent } from './statement-dialog/statement-dialog.component';
//added the information for the design
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ServiceListComponent,
    StatementDialogComponent,
    NotFoundComponent,
    AuthLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
