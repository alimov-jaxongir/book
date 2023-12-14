import { Component, OnInit } from '@angular/core';

import { OrderService } from '../services/orders/order.service';
import { Router } from '@angular/router';
import { CartService } from '../services/carts/cart.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrls: ['./checkout-review.component.scss']
})

export class CheckoutReviewComponent implements OnInit {

  orders:any[]=[]
  total:number=0
  constructor(private orderService:OrderService,private route:Router,private cartService:CartService,private translate:TranslateService) { }

  ngOnInit(): void {
    
    this.orderService.orderss$.subscribe((val:any)=>{
      this.orders=val
      for(let key in val){
         this.total+=parseInt(val[key].book.promotion_price)*parseInt(val[key].count)
      }
      if(val.length<=0){
        this.route.navigate(['/shop/cart'])
      }
    })
  
  }
  addtoOrdered(){
    this.orders.map(order=>{
      this.cartService.deleteCart(order?.karzinka_id)
      let user_id=JSON.parse(localStorage.getItem("user_id") as string)
      this.orderService.addToOrder(user_id,order.book.id,order.count)
       
  })
  this.route.navigate(["/account/orders"])
  }
    

}
