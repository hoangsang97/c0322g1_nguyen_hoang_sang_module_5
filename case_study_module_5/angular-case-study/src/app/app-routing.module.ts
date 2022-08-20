import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContractListComponent} from './contract/contract-list/contract-list.component';
import {ContractCreateComponent} from './contract/contract-create/contract-create.component';
import {ContractUpdateComponent} from './contract/contract-update/contract-update.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'customer',
  loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
}, {
  path: 'facility',
  loadChildren: () => import('./facility/facility.module').then(m => m.FacilityModule)
}, {
  path: 'contract',
  loadChildren: () => import('./contract/contract.module').then(m => m.ContractModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
