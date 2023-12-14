import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../shared/guard/admin.guard';


const routes: Routes = [
    {
        path: '', loadChildren: () => import('./homes/homes.module').then(m => m.HomesModule)
    },
    {
        path: 'shop', loadChildren: () => import('./shops/shops.module').then(m => m.ShopsModule)
    },
    {
        path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
    },
    {
        path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),canLoad:[AdminGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
