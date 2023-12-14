import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Pages
import {AccountOrdersComponent} from "./account-orders/account-orders.component";
import { AccountWishlistComponent } from './account-wishlist/account-wishlist.component';
import { NotLoginGuard } from 'src/app/shared/guard/not-login.guard';


const routes: Routes = [
  { path:'orders', component:AccountOrdersComponent },
  { path:'wishlist', component:AccountWishlistComponent ,canActivate:[NotLoginGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccountRoutingModule { }
