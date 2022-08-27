import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BenhAnRoutingModule } from './benh-an-routing.module';
import { BenhAnListComponent } from './benh-an-list/benh-an-list.component';
import { BenhAnUpdateComponent } from './benh-an-update/benh-an-update.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReactiveFormsModule} from '@angular/forms';
import { BenhAnCreateComponent } from './benh-an-create/benh-an-create.component';

@NgModule({
  declarations: [
    BenhAnListComponent,
    BenhAnUpdateComponent,
    BenhAnCreateComponent
  ],
  imports: [
    CommonModule,
    BenhAnRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class BenhAnModule { }
