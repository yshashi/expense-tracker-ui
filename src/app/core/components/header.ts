import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthState } from '../../shared/services/auth-state';

@Component({
  selector: 'app-header',
  template: `
    <header class="bg-sky-600 shadow-lg">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center"
      >
        <h1 routerLink="/" class="text-3xl font-bold text-white cursor-pointer">
          Expense Tracker
        </h1>
        <nav class="space-x-4">
          @if (authState.isUserLoggedIn()) {

          <a routerLink="/dashboard" class="text-white hover:text-sky-200"
            >Dashboard</a
          >
          <a routerLink="/profile" class="text-white hover:text-sky-200"
            >Profile</a
          >
          <a (click)="authState.logout()" class="text-white hover:text-sky-200 cursor-pointer"
            >Logout</a
          >
          } @else {
          <a routerLink="/login" class="text-white hover:text-sky-200">Login</a>
          }
        </nav>
      </div>
    </header>
  `,
  imports: [RouterLink],
})
export class Header {
  authState = inject(AuthState);
}
