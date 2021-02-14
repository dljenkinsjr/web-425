/*============================================;
Title: Assignment 7.2;
Author: Professor Krasso ;
Date: 13 February 2020;
Modified By: Douglas Jenkins;
Description: Input Exercise 7.2 - Reactive Forms
;===========================================*/

import { TestBed } from '@angular/core/testing';

import { SignInGuard } from './sign-in.guard';

describe('SignInGuard', () => {
  let guard: SignInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SignInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
