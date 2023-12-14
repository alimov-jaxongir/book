import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ShopCartComponent} from "./shop-cart/shop-cart.component";

import {CheckoutReviewComponent} from "./checkout-review/checkout-review.component";
import { ShopSingleV1Component } from './shop-single-v1/shop-single-v1.component';
import { NotLoginGuard } from 'src/app/shared/guard/not-login.guard';


const routes: Routes = [
  { path:'single/:slug', component:ShopSingleV1Component },
  { path:'cart', component:ShopCartComponent,canActivate:[NotLoginGuard]},
  { path:'checkout-review', component:CheckoutReviewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ShopsRoutingModule { }
