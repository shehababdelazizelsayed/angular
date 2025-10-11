import { Routes } from '@angular/router';
import { Home } from './home/home';
import { UserList } from './user-list/user-list';
import { Reports } from './reports/reports';
import { Settings } from './settings/settings';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'users', component: UserList },
  { path: 'reports', component: Reports },
  { path: 'settings', component: Settings },
];
