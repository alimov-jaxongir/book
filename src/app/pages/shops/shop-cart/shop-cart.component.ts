import { Component, OnDestroy, OnInit } from '@angular/core';


import { CartService } from '../services/carts/cart.service';
import { CartModel, } from '../models/cart.model';
import { OrderService } from '../services/orders/order.service';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import Swal from 'sweetalert2';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})

/**
 * Shop Cart Component
 */
export class ShopCartComponent implements OnInit {

 modalCheck:boolean=false
  carts:CartModel[]=[];
  subTotal=0;
  cart:CartModel[]=[]
  cartId:number[]=[]
  cartChange=false
  cartRemovedId!: number;
  qty:number=1

  constructor(private cartService:CartService,private orderService:OrderService,private router:Router) { }

  ngOnInit(): void {
   this.carts=JSON.parse(localStorage.getItem("carts") as string)
   if(!this.carts){
  this.carts=[]
   }
  }

  onChange(event:any){
    if(this.cartId.includes(event.target.value)){
      let totals=0
      this.subTotal=totals
      const index=this.cartId.indexOf(event.target.value)
       this.cartId.splice(index,1)
       const cartIndex=this.cart.indexOf(this.cart.filter(v=>v['karzinka_id']==event.target.value)[0])
       this.cart.splice(cartIndex,1) 
       this.cart.map((cart:any)=>{
        totals+=cart?.book.promotion_price*cart?.count
        this.subTotal=totals
      }) 
    }
    else{
      this.cartId.push(event.target.value)
      let totals=0
      this.cart.push(this.carts.filter(v=>v['karzinka_id']==event.target.value)[0])
      this.cart.map((cart:any)=>{
        totals+=cart?.book.promotion_price*cart?.count
        this.subTotal=totals
      })
    }
  }

  removeCart(id:number){
    this.cartService.deleteCart(id)
    this.carts=JSON.parse(localStorage.getItem("carts") as string)
    const Toast:any = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 5000,
      icon:"success"
    })
    Toast.fire({
      type: "success",
      title: `Savatchadan o'chirildi`
    });
  }
  
  onCartRemoved(id: any) {
    this.carts=JSON.parse(localStorage.getItem("carts") as string)
  }
  
  
 
  addToOrder(){
     this.orderService.orderList(this.cart)
     console.log(this.cart);
     
     this.router.navigate(["/shop/checkout-review"])
  }
}
