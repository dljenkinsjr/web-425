/*============================================;
Title: Assignment 3.2;
Author: Professor Krasso ;
Date: 15 January 2020;
Modified By: Douglas Jenkins;
Description: Passing Data Routes Part 1
;===========================================*/

import { IComposer } from './composer.interface';

export class Composer {

  composers: Array<IComposer>;

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

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
