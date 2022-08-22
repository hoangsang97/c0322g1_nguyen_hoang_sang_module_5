import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoEditComponent} from './todo-edit/todo-edit.component';

const routes: Routes = [{
  path: 'edit/:id',
  component: TodoEditComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
