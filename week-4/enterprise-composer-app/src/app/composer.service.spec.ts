/*============================================;
Title: Assignment 4.4;
Author: Professor Krasso ;
Date: 23 January 2020;
Modified By: Douglas Jenkins;
Description: Async Pipe
;===========================================*/

import { TestBed } from '@angular/core/testing';

import { ComposerService } from './composer.service';

describe('ComposerService', () => {
  let service: ComposerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
