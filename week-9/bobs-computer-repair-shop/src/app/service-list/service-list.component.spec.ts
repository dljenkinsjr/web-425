/*============================================;
Title: Assignment 9.3;
Author: Professor Krasso ;
Date: 26 February 2020;
Modified By: Douglas Jenkins;
Description: Bob's Computer Repair
;===========================================*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceListComponent } from './service-list.component';

describe('ServiceListComponent', () => {
  let component: ServiceListComponent;
  let fixture: ComponentFixture<ServiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
