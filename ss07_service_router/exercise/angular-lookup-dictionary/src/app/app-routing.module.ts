import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionayPageComponent} from './dictionay/dictionay-page/dictionay-page.component';
import {DictionaryDetailComponent} from './dictionay/dictionary-detail/dictionary-detail.component';


const routes: Routes = [{
  path: '',
  component: DictionayPageComponent
}, {
  path: 'dictionary-detail/:mean',
  component: DictionaryDetailComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
