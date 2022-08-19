import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import {FacilityCreateComponent} from './facility/facility-create/facility-create.component';
import {FacilityUpdateComponent} from './facility/facility-update/facility-update.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import { ContractUpdateComponent } from './contract/contract-update/contract-update.component';

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
    ContractListComponent,
    FacilityCreateComponent,
    FacilityUpdateComponent,
    ContractCreateComponent,
    ContractUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
