import { Component, OnDestroy, OnInit } from '@angular/core';
import { FavouriteService } from '../../shops/services/favourites/favourite.service';
import { FavouriteModel,  } from '../../shops/models/favorite.model';
import { Subject,  } from 'rxjs';

@Component({
  selector: 'app-account-wishlist',
  templateUrl: './account-wishlist.component.html',
  styleUrls: ['./account-wishlist.component.scss']
})


export class AccountWishlistComponent implements OnInit {
  favourities: FavouriteModel[] = []

  constructor(private favService: FavouriteService) {

  }

  ngOnInit(): void {
      this.favourities=JSON.parse(localStorage.getItem("favourites") as string)
    
  }

  deleteWish(id: number) {
    this.favService.deleteWishlist(id)
    this.favourities = JSON.parse(localStorage.getItem('favourites') as string)
  }
 

}
