import { Component } from '@angular/core';
import { NgIf, NgFor, NgClass, NgStyle } from '@angular/common';
import { HighlightDirective } from '../highlight';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, NgStyle, HighlightDirective],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css'],
})
export class UserList {
  showUsers = true;

  users = [
    { name: 'shehab', active: true },
    { name: '7amada', active: false },
    { name: 'zed', active: true },
    { name: 'Diana', active: false },
  ];

  toggleUsers() {
    this.showUsers = !this.showUsers;
  }
}
