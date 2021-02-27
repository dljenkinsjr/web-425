/*============================================;
Title: Assignment 9.3;
Author: Professor Krasso ;
Date: 26 February 2020;
Modified By: Douglas Jenkins;
Description: Bob's Computer Repair
;===========================================*/

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StatementDialogComponent } from '../statement-dialog/statement-dialog.component';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {
//these are created so it can take the value of the check boxes
selectedItemsList = [];
checkedIDs = [];
checkedValues = [];

total: number;
partsCost = 0;
laborCost = 0;


constructor(private dialog: MatDialog) {}

//when clicked it will start the dialog component
submit() {
  const dialogRef = this.dialog.open(StatementDialogComponent, {
    width: '30%',
    data: {selectedItemsList: this.selectedItemsList, total: this.total, partsCost: this.partsCost, laborCost: this.laborCost}
  });
}

//list of services that will be displayed
servicesList = [
   {
      name: "Password Reset",
      value: 39.99,
      id: 'passwordReset',
      label: 'Password Reset - $39.99',
      isChecked: false
    },
    {
      name: "Spyware Removal",
      value: 99.99,
      id: 'spywareRemoval',
      label: 'Spyware Removal - $99.99',
      isChecked: false
    },
    {
      name: "Ram Upgrade",
      value: 129.99,
      id: 'ramUpgrade',
      label: 'Ram Upgrade - $129.99',
      isChecked: false
    },
    {
      name: "Spyware Installation",
      value: 49.99,
      id: 'spywareInstallation',
      label: 'Spyware Installation - $49.99',
      isChecked: false
    },
    {
      name: "Tune Up",
      value: 89.99,
      id: 'tuneUp',
      label: 'Tune Up - $89.99',
      isChecked: false
    },
    {
      name: "Keyboard Cleaning",
      value: 45.00,
      id: 'keyboardCleaning',
      label: 'Keyboard Cleaning - $45.00',
      isChecked: false
    },
    {
      name: "Disk Clean Up",
      value: 149.99,
      id: 'diskCleanUp',
      label: 'Disk Clean Up - $149.99',
      isChecked: false
    }
]

ngOnInit(): void {
  this.total = 0;
  this.fetchSelectedItems()
  this.fetchCheckedIDs()
}

changeSelection() {
  this.total = 0;
  this.fetchSelectedItems()
  this.fetchCheckedIDs()
}

fetchSelectedItems() {
  this.selectedItemsList = this.servicesList.filter((value, index) => {
    return value.isChecked
  });
}

//will help when it comes time to calculate the prices
fetchCheckedIDs() {
  this.checkedIDs = []
  this.servicesList.forEach((value, index) => {

    if (value.isChecked) {
      this.checkedIDs.push(value.id);
      this.total += value.value;
    }
  });
}
}
