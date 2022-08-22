import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import {ContractListComponent} from './contract-list/contract-list.component';
import {ContractCreateComponent} from './contract-create/contract-create.component';
import {ContractUpdateComponent} from './contract-update/contract-update.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    ContractListComponent,
    ContractCreateComponent,
    ContractUpdateComponent
  ],
    imports: [
        CommonModule,
        ContractRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule
    ]
})
export class ContractModule { }
