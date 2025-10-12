import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  x = 'lab3';
  sale = true;
  sales() {
    this.sale = !this.sale;
  }
}
