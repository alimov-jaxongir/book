import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbPaginationModule,NgbTooltipModule,NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';

// Component
import { SharedModule } from "../../shared/shared.module";
import {  AdminRoutingModule } from "./admin-routing.module";
import {  OrdersComponent } from './orders/orders.component';
import { TranslateModule } from '@ngx-translate/core';
import {  AddBookComponent } from './addbook/addbook';
import { OrdersIDComponent } from './orderID/ordersID.component';

@NgModule({
  declarations: [
   OrdersComponent,
   AddBookComponent,
   OrdersIDComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbTooltipModule,
    NgbCollapseModule,
    SharedModule,
    AdminRoutingModule,
    TranslateModule
  ],
  providers:[
    DatePipe
  ]
})
export class AdminModule { }
