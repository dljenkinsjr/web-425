/*============================================;
Title: Assignment 4.4;
Author: Professor Krasso ;
Date: 23 January 2020;
Modified By: Douglas Jenkins;
Description: Async Pipe
;===========================================*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Observable<IComposer[]>;
  textSearchControl = new FormControl('');

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();

    this.textSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
  }

  ngOnInit(): void {
  }
// gives the name of the current text field
  filterComposers(name: string){
    this.composers = this.composerService.filterComposers(name);
  }

}
