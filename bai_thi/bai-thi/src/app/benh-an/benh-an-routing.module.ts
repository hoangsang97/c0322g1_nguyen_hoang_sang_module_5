import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BenhAnListComponent} from './benh-an-list/benh-an-list.component';
import {BenhAnUpdateComponent} from './benh-an-update/benh-an-update.component';
import {BenhAnCreateComponent} from './benh-an-create/benh-an-create.component';

const routes: Routes = [
  {
    path: 'list/:page',
    component: BenhAnListComponent
  }, {
    path: 'update/:id',
    component: BenhAnUpdateComponent
  }, {
    path: 'create',
    component: BenhAnCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BenhAnRoutingModule { }
