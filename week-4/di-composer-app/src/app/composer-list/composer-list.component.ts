/*============================================;
Title: Assignment 4.2;
Author: Professor Krasso ;
Date: 23 January 2020;
Modified By: Douglas Jenkins;
Description: Inversion of control
;===========================================*/


import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
  }

  ngOnInit(): void {
  }

}
