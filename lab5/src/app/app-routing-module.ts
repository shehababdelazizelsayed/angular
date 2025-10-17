import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserList } from './user-list/user-list';
import { UserForm } from './user-form/user-form';

const routes: Routes = [
  { path: '', component: UserList },
  { path: 'add', component: UserForm },
  { path: 'edit/:id', component: UserForm },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
