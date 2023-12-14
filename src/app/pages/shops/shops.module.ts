import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbRatingModule, NgbPaginationModule, NgbAccordionModule, NgbTooltipModule, NgbNavModule, NgbCollapseModule, NgbProgressbarModule, NgbProgressbar} from '@ng-bootstrap/ng-bootstrap';

import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


import { SharedModule } from "../../shared/shared.module";
import { ShopsRoutingModule } from "./shops-routing.module";

import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { CheckoutReviewComponent } from './checkout-review/checkout-review.component';

import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TranslateModule } from '@ngx-translate/core';
import { ShopSingleV1Component } from './shop-single-v1/shop-single-v1.component';


@NgModule({
  declarations: [
    ShopCartComponent,
    CheckoutReviewComponent,
     ShopSingleV1Component
     
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbRatingModule,
    NgbPaginationModule,
    NgbAccordionModule,
    NgbTooltipModule,
    NgbNavModule,
    NgbCollapseModule,
    NgbProgressbarModule,
    RouterModule,
    NgxSliderModule,
    SharedModule,
    ShopsRoutingModule,
    NgxUsefulSwiperModule,
    ScrollToModule.forRoot(),
    NgxSkeletonLoaderModule,
    NgbTooltipModule,
    TranslateModule

  ]
})
export class ShopsModule { }
