import { Component } from '@angular/core';
import { MonthlyBudget } from './components/monthly-budget';
import { MoneyWidget } from '../../shared/components/money-widget';

@Component({
  selector: 'app-dashboard',
  template: ` <div class="container w-full mx-auto min-h-screen my-5">
    <div class="my-8 pt-5">
      <h1 class="text-sky-900 font-semibold text-2xl">Dashboard</h1>
      <p class="text-gray-400">Welcome to the Expense Management System</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
      @for (data of widgetData; track data.title) {
      <app-money-widget
        [title]="data.title"
        [amount]="data.amount"
        [lastMonthAmount]="data.lastMonthAmount"
      />
      }
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      <app-monthly-budget />
    </div>
  </div>`,
  imports: [MoneyWidget, MonthlyBudget],
})
export class Dashboard {
  widgetData = [
    {
      title: 'Total Period Change',
      amount: 1000,
      lastMonthAmount: 800,
    },
    {
      title: 'Total Expense',
      amount: 540,
      lastMonthAmount: 430,
    },
    {
      title: 'Total Period Income',
      amount: 2000,
      lastMonthAmount: 1500,
    },
    {
      title: 'Total Balance',
      amount: 1460,
      lastMonthAmount: 1070,
    },
  ];
}
