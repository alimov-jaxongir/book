import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Component
import { IndexComponent } from './index/index.component';

const routes: Routes = [
    {
        path: 'home', component: IndexComponent,
        
    },
    {
         path: '',   redirectTo: 'home',pathMatch:"full"
     },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomesRoutingModule { }
