import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';

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
export class AppRoutingModule {
}
