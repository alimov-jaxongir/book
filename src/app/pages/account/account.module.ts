import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbPaginationModule,NgbTooltipModule,NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';

// Component
import { SharedModule } from "../../shared/shared.module";
import { AccountRoutingModule } from "./account-routing.module";
import { AccountOrdersComponent } from './account-orders/account-orders.component';
import { CurrencyReplacePipe } from 'src/app/shared/pipes/currencyReplace.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { AccountWishlistComponent } from './account-wishlist/account-wishlist.component';

@NgModule({
  declarations: [
    AccountOrdersComponent,
    AccountWishlistComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbTooltipModule,
    NgbCollapseModule,
    SharedModule,
    AccountRoutingModule,
    TranslateModule
  ],
  providers:[
    DatePipe
  ]
})
export class AccountModule { }
