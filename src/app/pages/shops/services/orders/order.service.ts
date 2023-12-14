import { Injectable } from '@angular/core';
import { OrderModel } from '../../models/order.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { BookModel } from '../../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor() { }
  orders:OrderModel[]=[]
 orderss$=new BehaviorSubject<BookModel[]>([])
  orderList(value:any){
   this.orderss$.next(value)
 }
  addToOrder(user_id:number,book_id:number,count:number){
    this.orders=JSON.parse(localStorage.getItem('orders') as string) 
    if(!this.orders){
      this.orders=[]
      this.orders.push({order_id:this.orders.length,user_id,book_id,count,order_status:"received",createdAt:new Date()})
    }
    else{
      this.orders.push({order_id:this.orders.length,user_id,book_id,count,order_status:"received",createdAt:new Date()})
    }
    localStorage.setItem("orders",JSON.stringify(this.orders))
  }
  
}
