import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApi } from '../../shared/services/auth-api';
import { NgToastComponent, NgToastService } from 'ng-angular-popup';
import { LoginResponse } from './types/login-response';

@Component({
  selector: 'app-login',
  template: ` <div
    class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
  >
    <h2 class="text-2xl font-bold mb-4">Login</h2>
    <form [formGroup]="loginForm" class="space-y-4">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          type="email"
          id="email"
          formControlName="email"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700"
          >Password</label
        >
        <input
          type="password"
          id="password"
          formControlName="password"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          required
        />
      </div>
      <button
        type="submit"
        (click)="login()"
        class="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300"
      >
        Login
      </button>
    </form>
    <p class="mt-4 text-sm text-gray-600">
      Don't have an account?
      <a routerLink="/register" class="text-sky-600 hover:underline"
        >Register here</a
      >.
    </p>
    <p class="mt-2 text-sm text-gray-600">
      <a routerLink="/forgot-password" class="text-sky-600 hover:underline"
        >Forgot your password?</a
      >
    </p>
  </div>`,
  imports: [RouterLink, ReactiveFormsModule],
})
export class Login {
  fb = inject(FormBuilder);
  authApi = inject(AuthApi);
  router = inject(Router);
  toast = inject(NgToastService);

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      // Call the AuthApi service to perform login
      if (email && password) {
        this.authApi.login(email, password).subscribe({
          next: (response) => {
            this.toast.success('Login successful!');
            this.router.navigate(['/dashboard']);
            localStorage.setItem('token', response.user.token);
          },
          error: (error) => {
            console.error('Login failed:', error);
            this.toast.danger('Login failed. Please check your credentials.');
          },
        });
      }
    } else {
      this.toast.warning('Please fill in all required fields.');
    }
  }
}
