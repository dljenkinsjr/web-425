/*============================================;
Title: Assignment 8.2;
Author: Professor Krasso ;
Date: 19 February 2020;
Modified By: Douglas Jenkins;
Description: Server Side Communications
;===========================================*/

//import statements for the interfaces
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
// Ibook not used anymore
import { IBook } from './book.interface';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

// array of jim lee's books that will be posted and meet the ibook interface

  constructor(private http: HttpClient) {
  }

  //list of isbns numbers that will be displayed as a string
  isbns: Array<string> = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959'
   ];


  // returning books by isbn and as a list
  getBooks() {
   let params = new HttpParams();

    // loops over and will return when it matches the isbn
    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');
    return this.http.get('https://openlibrary.org/api/books', {params: params})
}


}
