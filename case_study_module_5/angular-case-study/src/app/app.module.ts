import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerUpdateComponent} from './customer/customer-update/customer-update.component';
import {HomeComponent} from './home/home.component';
import {FacilityListComponent} from './facility/facility-list/facility-list.component';
import {ContractListComponent} from './contract/contract-list/contract-list.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'customer/list',
  component: CustomerListComponent
}, {
  path: 'customer/create',
  component: CustomerCreateComponent
}, {
  path: 'customer/update',
  component: CustomerUpdateComponent
}, {
  path: 'facility/list',
  component: FacilityListComponent
}, {
  path: 'contract/list',
  component: ContractListComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomerCreateComponent,
    CustomerListComponent,
    CustomerUpdateComponent,
    HomeComponent,
    FacilityListComponent,
    ContractListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {
}
