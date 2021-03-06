/*============================================;
Title: Assignment 5.4;
Author: Professor Krasso ;
Date: 30 January 2020;
Modified By: Douglas Jenkins;
Description: Dialogs
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
  books :Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook;

// has to be added to be able to access the book information
constructor(private booksService: BooksService, private dialog: MatDialog)
{
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
  }
// creates a dialogRef object and it is assigned to a function
  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);

    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book
      },
      disableClose: true,
      width: '800px'
    })

    console.log(this.book);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.book = null;
      }
    });
  }
}


