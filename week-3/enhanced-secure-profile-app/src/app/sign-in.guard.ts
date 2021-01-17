/*============================================;
Title: Assignment 3.4;
Author: Professor Krasso ;
Date: 15 January 2020;
Modified By: Douglas Jenkins;
Description: Guarding Routes
;===========================================*/

//added a important statement from the built in router
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {
// creates the router for the import
  constructor(private router: Router) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//if true you will be logged in and if not you will be given a false value
    let isLoggedIn = next.queryParams.isLoggedIn;
      if (isLoggedIn) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
    }
  }
}
