import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BenhAnListComponent} from './benh-an-list/benh-an-list.component';
import {BenhAnUpdateComponent} from './benh-an-update/benh-an-update.component';

const routes: Routes = [
  {
    path: 'list',
    component: BenhAnListComponent
  }, {
    path: 'update/:id',
    component: BenhAnUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BenhAnRoutingModule { }
