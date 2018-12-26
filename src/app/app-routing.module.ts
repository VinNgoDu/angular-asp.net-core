import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/product/list/index.component';
import { AddComponent } from './components/product/add/add.component';
import { EditComponent } from './components/product/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
