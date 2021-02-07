/*============================================;
Title: Assignment 6.3;
Author: Professor Krasso ;
Date: 7 February 2020;
Modified By: Douglas Jenkins;
Description: Layouts
;===========================================*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLayoutComponent } from './base-layout.component';

describe('BaseLayoutComponent', () => {
  let component: BaseLayoutComponent;
  let fixture: ComponentFixture<BaseLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
