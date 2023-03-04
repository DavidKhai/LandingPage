import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // {
      //     path: 'stock-setup',
      //     loadChildren: () => import('../stock-setup/stock-setup.module').then(m => m.StockSetupModule),
      // },
      // {
      //     path: 'stock',
      //     loadChildren: () => import('../stock/stock.module').then(m => m.StockModule),
      // },
      // {
      //     path: 'ticketing',
      //     loadChildren: () => import('../ticketing/ticketing.module').then(m => m.TicketingModule),
      // },
      // {
      //     path: 'ticketing-setup',
      //     loadChildren: () => import('../ticketing-setup/ticketing-setup.module').then(m => m.TicketingSetupModule),
      // },
      // {
      //     path: 'reports',
      //     loadChildren: () => import('../reports/reports.module').then(m => m.ReportsModule)
      // },
      // {
      //     path: 'customers',
      //     loadChildren: () => import('../customer/customer.module').then(m => m.CustomerModule)
      // }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
