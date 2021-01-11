/*============================================;
Title: Assignment 2.4;
Author: Professor Krasso ;
Date: 5 January 2020;
Modified By: Douglas Jenkins;
Description: Routing in action
;===========================================*/

import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<Composer>;
// array of composers in the video game industry with the genre they specialize in
  constructor() {
    this.composers = [
      new Composer("Koji Kondo", "Adventure"),
      new Composer("Bear McCreary", "Horror"),
      new Composer("Todd Baker", "Puzzle"),
      new Composer("Austin Wintory", "Strategy"),
      new Composer("Jessica Curry", "RPG")
    ]
  }

  ngOnInit(): void {
  }

}
