/*============================================;
Title: Assignment 5.4;
Author: Professor Krasso ;
Date: 30 January 2020;
Modified By: Douglas Jenkins;
Description: Dialogs
;===========================================*/

import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
