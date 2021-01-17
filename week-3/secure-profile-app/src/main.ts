/*============================================;
Title: Assignment 2.3;
Author: Professor Krasso ;
Date: 4 January 2020;
Modified By: Douglas Jenkins;
Description: Data Binding
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
