/*============================================;
Title: Assignment 8.2;
Author: Professor Krasso ;
Date: 19 February 2020;
Modified By: Douglas Jenkins;
Description: Server Side Communications
;===========================================*/


import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../book.interface';
import { BooksService } from "../books.service";
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
//builds the header for the table
  books :Array<IBook> = [

  ];

  book: IBook;

// has to be added to be able to access the book information
constructor(private booksService: BooksService, private dialog: MatDialog) {
  this.booksService.getBooks().subscribe(res => {
    console.log(res);
    for (let key in res) {
      if (res.hasOwnProperty(key)) {
        let authors = [];
        if (res[key].details.authors) {
          authors = res[key].details.authors.map(function(author) {
            return author.name;
          })
        }

        // pushes the object to the book array
        this.books.push({
          isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
          title: res[key].details.title,
          description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
          numOfPages: res[key].details.number_of_pages,
          authors: authors
        })
      }
    }
  })
}

ngOnInit(): void { }

// searches for the isbn number when you pass it through
showBookDetails(isbn: string) {
  this.book = this.books.find(book => book.isbn === isbn);
// set to true so you have the chance to close the box
  const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
    data: {
      book: this.book
    },
    // how long the dialog box will be
    disableClose: true,
    width: '800px'
  })

  console.log(this.book);
//used to close dialog and receive notifications
  dialogRef.afterClosed().subscribe(result => {
    if (result === 'confirm') {
      this.book = null;
    }
  });
}
}

