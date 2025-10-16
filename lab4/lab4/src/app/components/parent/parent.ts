import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  username: string = 'shehab';
  zero: string = '';

  receiveMessage(message: string) {
    this.zero = message;
  }
}
