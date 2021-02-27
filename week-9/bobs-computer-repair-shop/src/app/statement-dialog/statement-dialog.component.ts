/*============================================;
Title: Assignment 9.3;
Author: Professor Krasso ;
Date: 26 February 2020;
Modified By: Douglas Jenkins;
Description: Bob's Computer Repair
;===========================================*/

import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-statement-dialog',
  templateUrl: './statement-dialog.component.html',
  styleUrls: ['./statement-dialog.component.scss']
})

export class StatementDialogComponent implements OnInit {

  //inputs of the selected information for the tax, total and labor fees
  @Input() selectedItemsList;
  @Input() total: number;
  @Input() tax: number;
  @Input() parts: number;
  @Input() labor: number;

  //Will have the date of the current statement
  today: number = Date.now();

  constructor(private dialogRef: MatDialogRef<StatementDialogComponent>,
    @Inject(MAT_DIALOG_DATA)data) {
      this.total = data.total,
      this.tax = data.total * 0.05
      this.parts = data.total * 0.10
      this.labor = data.total * 0.25
      this.selectedItemsList = data.selectedItemsList;
    }

  ngOnInit(): void {  }

}
