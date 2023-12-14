import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, takeUntil } from 'rxjs';
import { BookModel } from 'src/app/pages/shops/models/book.model';
import { CategoryModel } from 'src/app/pages/shops/models/category.model';
import { CartService } from 'src/app/pages/shops/services/carts/cart.service';
import { FavouriteService } from 'src/app/pages/shops/services/favourites/favourite.service';
import { books } from 'src/app/pages/shops/services/products/data';
import { ProductService } from 'src/app/pages/shops/services/products/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
  encapsulation: ViewEncapsulation.None
})

/**
 * Trending Component
 */
export class TrendingComponent implements OnInit, OnDestroy {

  books: BookModel[] = []
  categories: CategoryModel[] = []
  modalCheck: boolean = false

  readonly = true;
  role = localStorage.getItem("role")
  load: boolean = false
  constructor(private productService: ProductService, private cartService: CartService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    if (!JSON.parse(localStorage.getItem("books") as string) || JSON.parse(localStorage.getItem("books") as string).length == 0) {
      this.books = books
    }
    else {
      this.books = JSON.parse(localStorage.getItem("books") as string)
    }
    this.productService.$categories.subscribe((val: CategoryModel[]) => {
      this.categories = val
    })
    this.route.queryParams.subscribe((params) => {
      const searchTerm = params['search'];
      if (searchTerm?.length >= 3) {
        this.books = JSON.parse(localStorage.getItem("books") as string)
        this.books = this.books.filter(
          (book) => book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      } 
      else{
        this.books = JSON.parse(localStorage.getItem("books") as string)

      }
    }
    )
  }
  another(){
    this.router.navigate([], {
      queryParams: {},
    });
    this.books = JSON.parse(localStorage.getItem("books") as string)
  }
  getCategories(id: number) {
    return this.categories.filter(val => val.category_id == id)[0].name.uz
  }
  delete(id: number) {
    this.productService.deleteBook(id)
    const Toast: any = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 5000,
      icon: "success"
    })
    Toast.fire({
      type: "success",
      title: `Savatchaga qo'shildi`
    });
    this.books = JSON.parse(localStorage.getItem("books") as string)
  }

  updateBook(book:BookModel){

  }
  addToCart(book: BookModel) {
    if (!localStorage.getItem("token") || localStorage.getItem('token') == null) {
      const Toast: any = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        icon: "error"
      })
      Toast.fire({
        type: "error",
        title: `Hisobingizga kiring`
      });
    }
    else {
      this.cartService.addToCart(book, 1)
      const Toast: any = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        icon: "success"
      })
      Toast.fire({
        type: "success",
        title: `Savatchaga qo'shildi`
      });
    }
  }


  ngOnDestroy(): void {

  }




}
