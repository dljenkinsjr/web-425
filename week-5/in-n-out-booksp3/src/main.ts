/*============================================;
Title: Assignment 5.4;
Author: Professor Krasso ;
Date: 30 January 2020;
Modified By: Douglas Jenkins;
Description: Dialogs
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
