import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderModel } from '../../shops/models/order.model';
import { OrderService } from '../../shops/services/orders/order.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from '../../shops/models/book.model';
import { ResponseModel } from '../../account/account.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ordersID',
  templateUrl: './ordersID.component.html',
  styleUrls: ['./ordersID.component.scss'],
})

/**
 * Account Orders Component
 */
export class OrdersIDComponent implements OnInit {

  orders:OrderModel[]=[]
  public isCollapsed = true;
  books:BookModel[]=[]
  book!:BookModel
  users:ResponseModel[]=[]
  constructor(public service: OrderService,private http:HttpClient,private router:Router,private route:ActivatedRoute) {
   
  }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id']
    this.books=JSON.parse(localStorage.getItem("books") as string)
    this.orders=JSON.parse(localStorage.getItem("orders") as string).filter((v:OrderModel)=>v.user_id==id)
    this.http.get<any>('https://dummyjson.com/users').subscribe(val=>{
      this.users=val.users
    })
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
userName(id:number){
  let user=this.users.filter(v=>v.id==id)[0]
  return user?.firstName
}
confirmed(order_id: number) {
  // Find the order with the given order_id
  const orderIndex = this.orders.findIndex(order => order.order_id === order_id);

  // If the order is found, update its status to "confirmed"
  if (orderIndex !== -1) {
    this.orders[orderIndex].order_status = 'confirmed';
  }

  this.orders=this.orders
  localStorage.setItem("orders",JSON.stringify(this.orders))
}
  
  signOut() { 
    localStorage.clear()
    this.router.navigate(['home'])
    setTimeout(() => {
      window.location.reload()
    }, 500);

  }
  ngOnDestroy(): void {
  }

}
