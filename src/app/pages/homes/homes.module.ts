import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbRatingModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

// Swiper Slider
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

//Route
import { HomesRoutingModule } from './homes-routing.module';

// Component
import { SharedModule } from "../../shared/shared.module";
import { IndexComponent } from './index/index.component';


import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgxUsefulSwiperModule,
    HomesRoutingModule,
    NgbTooltipModule,
    TranslateModule
  ],

})
export class HomesModule { }
