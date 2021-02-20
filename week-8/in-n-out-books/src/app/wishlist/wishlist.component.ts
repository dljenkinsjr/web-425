/*============================================;
Title: Assignment 6.2;
Author: Professor Krasso ;
Date: 7 February 2020;
Modified By: Douglas Jenkins;
Description: Input/Output Properties, Part 1
;===========================================*/

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from "../wishlist-item.interface";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  //creates a wishlist item array
  items: Array<IWishlistItem> =[];
  constructor() { }

  ngOnInit(): void {
  }

  // takes in an item of the I wishlist item
  updateItemsHandler(item: IWishlistItem){
    this.items.push(item);
  }

}
