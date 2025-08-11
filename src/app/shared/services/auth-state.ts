import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthState {
  router = inject(Router);
  private isUserLoggedInSubject = new BehaviorSubject<boolean>(false);
  isUserLoggedIn$ = this.isUserLoggedInSubject.asObservable();

  isUserLoggedIn() {
    const token = localStorage.getItem('token');
    const isLoggedIn = !!token;
    this.isUserLoggedInSubject.next(isLoggedIn);
    return isLoggedIn;
  }

  logout() {
    localStorage.removeItem('token');
    this.isUserLoggedInSubject.next(false);
    this.router.navigate(['/login']);
  }
}
