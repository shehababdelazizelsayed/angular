import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Parent } from './components/parent/parent';
import { Child } from './components/child/child';

const routes: Routes = [
  { path: 'parent', component: Parent },
  { path: 'child', component: Child },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
