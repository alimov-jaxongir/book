import {  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { FavouriteModel } from '../../models/favorite.model';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  favourites:FavouriteModel[]=[]
  constructor() { }
  addToWishlist(book:BookModel) {
    this.favourites=JSON.parse(localStorage.getItem('favourites') as string) 
    if(!this.favourites){
      this.favourites=[]
      this.favourites.push({favorite_id:this.favourites.length,book})
    }
    else{
      this.favourites.push({favorite_id:this.favourites.length,book})
    }
    localStorage.setItem("favourites",JSON.stringify(this.favourites))
  }
  deleteWishlist(bookId: number) {
    let favourites: FavouriteModel[] = JSON.parse(localStorage.getItem('favourites') as string);
      const index = favourites.findIndex(favourite => favourite.book.id === bookId);
    if (index !== -1) {
      favourites.splice(index, 1);
      localStorage.setItem('favourites', JSON.stringify(favourites));
    }
  }
  
}
