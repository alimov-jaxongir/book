import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent} from "./orders/orders.component";
import {  AddBookComponent } from './addbook/addbook';
import { OrdersIDComponent } from './orderID/ordersID.component';


const routes: Routes = [
  { path:'orders', component:OrdersComponent },
  { path:'addbook', component:AddBookComponent },
  { path:'orders/:id', component:OrdersIDComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
