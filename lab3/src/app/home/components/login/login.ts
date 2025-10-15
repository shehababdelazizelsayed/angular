import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Login data:', form.value);
    }
  }
}
