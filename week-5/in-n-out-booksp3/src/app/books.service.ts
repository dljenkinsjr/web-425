/*============================================;
Title: Assignment 5.4;
Author: Professor Krasso ;
Date: 30 January 2020;
Modified By: Douglas Jenkins;
Description: Dialogs
;===========================================*/

//import statements for the interfaces
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

// array of jim lee's books that will be posted and meet the ibook interface
  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '9781401204266',
        title: 'Batman: The Complete Hush',
        description: 'BATMAN: HUSH is a thrilling mystery of action, intrigue and deception',
        numOfPages: 298,
        authors: ['Jim Lee']
      },
      {
        isbn: '9781401247638',
        title: 'All Star Batman and Robin the Boy Wonder',
        description: 'Bruce Wayne and Vicki Vale witness a young boys life shattered before their eyes. Orphaned, Dick Grayson has nowhere to go and no one to turn to-no one but Bruce Wayne! ',
        numOfPages: 222,
        authors: ['Jim Lee']
      },
      {
        isbn: '9781401237882',
        title: 'Justice League vol 1',
        description: 'All-new origin story for the Justice League!',
        numOfPages: 173,
        authors: ['Jim Lee']
      },
      {
        isbn: '9781401250935',
        title: 'Superman Unchained',
        description: 'When another with incredible power, far more than that of mortal man, fell to the Earth. One who could spell the end for the Man of Steel.',
        numOfPages: 319,
        authors: ['Jim Lee']
      },
      {
        isbn: '9781302920012',
        title: 'X-Men XXL',
        description: 'The X-Men are transported to the Shiar Empire, and they find themselves reunited with their mentor, Professor X - but a cosmic conspiracy lurks in the shadows!',
        numOfPages: 322,
        authors: ['Jim Lee']
      }
    ]
  }

// returning books by isbn and as a list
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }
// loops over and will return when it matches the isbn
  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
