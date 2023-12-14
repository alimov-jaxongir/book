import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { OrderModel } from '../../shops/models/order.model';
import { OrderService } from '../../shops/services/orders/order.service';
import { Router } from '@angular/router';
import { BookModel } from '../../shops/models/book.model';

@Component({
  selector: 'app-account-orders',
  templateUrl: './account-orders.component.html',
  styleUrls: ['./account-orders.component.scss'],
})

/**
 * Account Orders Component
 */
export class AccountOrdersComponent implements OnInit {

  orders:OrderModel[]=[]
  public isCollapsed = true;
  books:BookModel[]=[]
  book!:BookModel
  constructor(public service: OrderService, private modalService: NgbModal,private route:Router) {
   
  }

  ngOnInit(): void {
    this.books=JSON.parse(localStorage.getItem("books") as string)
    let user_id=JSON.parse(localStorage.getItem("user_id") as string)
    this.orders=JSON.parse(localStorage.getItem("orders") as string).filter((v:OrderModel)=>v.user_id==user_id)
    
  }
  bookImage(id:number){
     let book=this.books.filter(v=>v.id==id)[0]
     return book.image
  }
  bookTitle(id:number){
    let book=this.books.filter(v=>v.id==id)[0]
    return book.title
 }
 bookPrice(id:number){
  let book=this.books.filter(v=>v.id==id)[0]
  return book.promotion_price
}
 
  
  signOut() { 
    localStorage.removeItem("favourites")
    localStorage.removeItem("carts")
    localStorage.removeItem("token")
    localStorage.removeItem("user_id")
    localStorage.removeItem("username")
    localStorage.removeItem("role")
    this.route.navigate(['home'])
    setTimeout(() => {
      window.location.reload()
    }, 500);

  }
  ngOnDestroy(): void {
  }

}
