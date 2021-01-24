/*============================================;
Title: Assignment 4.4;
Author: Professor Krasso ;
Date: 23 January 2020;
Modified By: Douglas Jenkins;
Description: Async Pipe
;===========================================*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable} from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;
// list of composers and their genres
   constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Koji Kondo", genre: "Adventure"
      },
      {
        composerId: 101, fullName: "Bear McCreary", genre: "Horror"
      },
      {
        composerId: 102, fullName: "Todd Baker", genre: "Puzzle"
      },
      {
        composerId: 103, fullName: "Austin Wintory", genre: "Strategy"
      },
      {
        composerId: 104, fullName: "Jessica Curry", genre: "RPG"
      },
    ]
  }

  // updated function to return array
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }

// creates the filter and gives the name value
  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map(composers =>
        composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
  }
}
