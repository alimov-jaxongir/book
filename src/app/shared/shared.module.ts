import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbDropdownModule, NgbNavModule, NgbRatingModule, NgbCollapseModule, NgbTooltipModule, NgbAccordionModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

// Language
import { LanguageService } from '../services/language.service';
import { TranslateModule } from '@ngx-translate/core';

// Swiper Slider
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

// Component
import { HeaderComponent } from './header/header.component';

import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { MenuComponent } from './menu/menu.component';

import { TranslangPipe } from './pipes/translang.pipe';
import { CurrencyReplacePipe } from './pipes/currencyReplace.pipe';
import { TrendingComponent } from './index/trending/trending.component';
// import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    MenuComponent,
    TrendingComponent,
    TranslangPipe,
    CurrencyReplacePipe,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCarouselModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbRatingModule,
    NgbCollapseModule,
    NgbTooltipModule,
    NgxUsefulSwiperModule,
    ScrollToModule.forRoot(),
    TranslateModule,
    NgbAccordionModule,
    NgbPopoverModule,
    
    
  ],
  providers: [
    LanguageService,
  ],
  exports: [HeaderComponent, BreadcrumbsComponent, FooterComponent, 
    TranslangPipe,CurrencyReplacePipe,TrendingComponent,MenuComponent]
})
export class SharedModule { }
