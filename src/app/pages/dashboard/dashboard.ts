import { Component } from "@angular/core";
import { TotalBalance } from "./components/total-balance";
import { TotalExpense } from "./components/total-expense";
import { TotalPeriodIncome } from "./components/total-period-income";
import { TotalPeriodChange } from "./components/total-period-change";
import { MonthlyBudget } from "./components/monthly-budget";

@Component({
  selector: 'app-dashboard',
  template: `
  <div class="container w-full mx-auto min-h-screen my-5">
    <div class="my-8 pt-5">
        <h1 class="text-sky-900 font-semibold text-2xl">Dashboard</h1>
    <p class="text-gray-400">Welcome to the Expense Management System</p>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        <app-total-balance></app-total-balance>
        <app-total-expense></app-total-expense>
        <app-total-period-income></app-total-period-income>
        <app-total-period-change></app-total-period-change>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <app-monthly-budget />
    </div>


  </div>`,
  imports: [TotalBalance, TotalExpense, TotalPeriodIncome, TotalPeriodChange, MonthlyBudget]
})
export class Dashboard {
}
