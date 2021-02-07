
/*============================================;
Title: Assignment 6.4;
Author: Professor Krasso ;
Date: 8 February 2020;
Modified By: Douglas Jenkins;
Description: Input Properties
;===========================================*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpaComponent } from './gpa.component';

describe('GpaComponent', () => {
  let component: GpaComponent;
  let fixture: ComponentFixture<GpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
