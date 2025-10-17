import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService, User } from '../services/user';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm implements OnInit {
  form!: FormGroup;
  id?: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
    });

    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.userService.getById(this.id).subscribe((user) => this.form.patchValue(user));
    }
  }

  onSubmit() {
    if (this.form.invalid) return;

    const user: User = this.form.value;
    if (this.id) {
      this.userService.update(this.id, user).subscribe(() => this.router.navigate(['/']));
    } else {
      this.userService.create(user).subscribe(() => this.router.navigate(['/']));
    }
  }
}
