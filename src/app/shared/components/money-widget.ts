import { CurrencyPipe } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-money-widget',
  imports: [CurrencyPipe],
  template: `
    <div
      class="p-4 shadow-2xl shadow-gray-300 m-1 rounded-lg bg-white outline outline-gray-200"
    >
      <h1 class="text-md font-semibold text-sky-900 mb-4">{{ title }}</h1>

      <h1 class="text-3xl font-bold text-sky-900">{{ amount | currency }}</h1>

      <hr class="my-4 border-gray-300" />

      <div>
        <p class="text-gray-500 text-sm">
          Last Month
          <span class="font-bold text-gray-500">{{
            lastMonthAmount | currency
          }}</span>
        </p>
      </div>
    </div>
  `,
})
export class MoneyWidget {
  @Input() title?: string;
  @Input() amount?: number;
  @Input() lastMonthAmount?: number;
}
