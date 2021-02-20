/*============================================;
Title: Assignment 6.2;
Author: Professor Krasso ;
Date: 7 February 2020;
Modified By: Douglas Jenkins;
Description: Input/Output Properties, Part 1
;===========================================*/

// adds the event emitter and wishlist item import
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})
// creates a output property
export class WishlistCreateComponent implements OnInit {

  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();
// added a field for item
  item: IWishlistItem;

  constructor() {
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }

  // this is going to be emitted to the IWish component
  addItem(){
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    })
    this.item = {} as   IWishlistItem;
  }

}
