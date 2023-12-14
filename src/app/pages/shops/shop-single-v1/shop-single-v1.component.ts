import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SwiperOptions, } from 'swiper';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/products/product.service';
import { FavouriteService } from '../services/favourites/favourite.service';
import { FavouriteModel,  } from '../models/favorite.model';
import { CartService } from '../services/carts/cart.service';
import Swal from 'sweetalert2';
import { OrderService } from '../services/orders/order.service';
import { Subject,  takeUntil } from 'rxjs';
import { BookModel } from '../models/book.model';

@Component({
  selector: 'app-shop-single-v1',
  templateUrl: './shop-single-v1.component.html',
  styleUrls: ['./shop-single-v1.component.scss']
})

/**
 * ShopSingle V1 Component
 */
export class ShopSingleV1Component implements OnInit {
  private unsubscribe$ = new Subject<void>();
  modalCheck: boolean = false
  cartChange:boolean=false
  favourities: FavouriteModel[] = []
  checkedfav: boolean = false
  book!: any
  qty: number = 1
  submitted = false;
  styleDatas: any;
  populerDatas: any;
  books:BookModel[]=[]
  product_img!: string
  loading = true;
  load = true
  check = false
 
  constructor(private modalService: NgbModal, private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute, private productService: ProductService, private router: Router,
    private favService: FavouriteService, private cartService: CartService, private orderService: OrderService) { 
      // window.scrollTo({ top: 0, behavior: 'smooth' });
    }

  ngOnInit(): void {
    this.favourities = JSON.parse(localStorage.getItem("favourites") as string)
    this.books = JSON.parse(localStorage.getItem("books") as string)
    this.route.params.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(val => {
     this.book=this.productService.singleProducts(val['slug'])
    }
      )
      this.favourities=JSON.parse(localStorage.getItem('favourites') as string)
      for (let key in this.favourities) {
        if (this.favourities[key].book.id == this.book.id) {
          this.checkedfav = true
        }
      }

      this.populerDatas=this.books.filter(val=>val.category_id==this.book.category_id)
      console.log(this.populerDatas);
      
  }

  addToWishlist(book:BookModel) {
    if (!localStorage.getItem("token") || localStorage.getItem('token') == null) {
      if (this.modalCheck == true) {
        this.modalCheck = false
        setTimeout(() => {
          this.modalCheck = true
        }, 500);
      }
      else {
        this.modalCheck = true
      }
    }
    else {
      if (this.checkedfav) {
        this.favService.deleteWishlist(book.id)
          this.favourities = JSON.parse(localStorage.getItem('favourites') as string)
          this.checkedfav = false
      }
      else {
        this.favService.addToWishlist(book)
          this.favourities = JSON.parse(localStorage.getItem('favourites') as string)
          this.checkedfav = true
        }
       
      }

    

  }
  incrementQty() {
    if (this.qty < 100) { 
      this.qty++;
    }
  }
  
  decrementQty() {
    if (this.qty > 1) { // Minimum allowed value is 1
      this.qty--;
    }
  }
  
  addToCart(book:BookModel) {
    if (!localStorage.getItem("token") || localStorage.getItem('token') == null) {
      if (this.modalCheck == true) {
        this.modalCheck = false
        setTimeout(() => {
          this.modalCheck = true
        }, 500);
      }
      else {
        this.modalCheck = true
      }
    }
    else {     
        this.cartService.addToCart(book,this.qty)
        const Toast:any = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 5000,
                  icon:"success"
                })
                Toast.fire({
                  type: "success",
                  title: `Savatchaga qo'shildi`
                });
    }
  }
  addToOrder() {
    if (!localStorage.getItem("token") || localStorage.getItem('token') == null) {
      if (this.modalCheck == true) {
        this.modalCheck = false
        setTimeout(() => {
          this.modalCheck = true
        }, 500);
      }
      else {
        this.modalCheck = true
      }
    }
    else {
        this.orderService.orderList([{book:this.book,count:this.qty}])
        this.router.navigate(["/shop/checkout-review"])
    }
  }


  imageModals(imgModal: any) {
    this.modalService.open(imgModal, { size: 'md', centered: true });
  }
  

  public Style: SwiperOptions = {
    pagination: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      499: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      }
    }
  };

  
  
  /**
  * Swiper Popular setting
  */
  public Popular: SwiperOptions = {
    pagination: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      499: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      }
    }
  };
 
  


  cargoModal(data:any){
    this.modalService.open(data, { size: 'sm', centered: true });
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
