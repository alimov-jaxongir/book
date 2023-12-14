import { Injectable } from '@angular/core';
import { CartModel,  } from '../../models/cart.model';
import { BookModel } from '../../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  carts:CartModel[]=[]
  constructor() { }
  addToCart(book:BookModel,count:number) {
    this.carts=JSON.parse(localStorage.getItem('carts') as string) 
    if(!this.carts){
      this.carts=[]
      this.carts.push({karzinka_id:this.carts.length,count,book})
    }
    else{
      this.carts.push({karzinka_id:this.carts.length,count,book})
    }
    localStorage.setItem("carts",JSON.stringify(this.carts))
  }
  deleteCart(id: number) {
    let carts: CartModel[] = JSON.parse(localStorage.getItem('carts') as string);
      const index = carts.findIndex(favourite => favourite.karzinka_id === id);
    if (index !== -1) {
      carts.splice(index, 1);
      localStorage.setItem('carts', JSON.stringify(carts));
    }
  }
  
}
