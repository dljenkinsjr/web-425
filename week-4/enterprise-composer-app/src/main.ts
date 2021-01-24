/*============================================;
Title: Assignment 4.4;
Author: Professor Krasso ;
Date: 23 January 2020;
Modified By: Douglas Jenkins;
Description: Async Pipe
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
