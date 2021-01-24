/*============================================;
Title: Assignment 3.2;
Author: Professor Krasso ;
Date: 15 January 2020;
Modified By: Douglas Jenkins;
Description: Passing Data Routes Part 1
;===========================================*/

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
