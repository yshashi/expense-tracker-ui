import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/components/header';
import { Footer } from './core/components/footer';
import { NgToastComponent, TOAST_POSITIONS } from 'ng-angular-popup';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, NgToastComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('expense-tracker-ui');
  TOAST_POSITIONS = TOAST_POSITIONS;
}
