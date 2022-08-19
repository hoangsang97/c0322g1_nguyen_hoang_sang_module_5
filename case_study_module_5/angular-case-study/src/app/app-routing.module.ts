import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {CustomerUpdateComponent} from './customer/customer-update/customer-update.component';
import {FacilityListComponent} from './facility/facility-list/facility-list.component';
import {FacilityCreateComponent} from './facility/facility-create/facility-create.component';
import {FacilityUpdateComponent} from './facility/facility-update/facility-update.component';
import {ContractListComponent} from './contract/contract-list/contract-list.component';
import {ContractCreateComponent} from './contract/contract-create/contract-create.component';
import {ContractUpdateComponent} from './contract/contract-update/contract-update.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'customer/list',
  component: CustomerListComponent
}, {
  path: 'customer/create',
  component: CustomerCreateComponent
}, {
  path: 'customer/update/:id',
  component: CustomerUpdateComponent,
}, {
  path: 'facility/list/:id',
  component: FacilityListComponent
}, {
  path: 'facility/create',
  component: FacilityCreateComponent
}, {
  path: 'facility/update/:id',
  component: FacilityUpdateComponent
}, {
  path: 'contract/list',
  component: ContractListComponent
}, {
  path: 'contract/create',
  component: ContractCreateComponent
}, {
  path: 'contract/update/:id',
  component: ContractUpdateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
