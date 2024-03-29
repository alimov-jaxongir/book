import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Swiper Slider
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

// Page Routing
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from "../shared/shared.module";
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUsefulSwiperModule,
    PagesRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class PagesModule { }
