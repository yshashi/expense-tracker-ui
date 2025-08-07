import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  template: ` <section class="bg-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 class="text-4xl font-bold text-sky-800 text-center mb-12">
        Key Features
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          class="bg-sky-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          <h4 class="text-2xl font-semibold text-sky-700 mb-4">
            Easy Expense Logging
          </h4>
          <p class="text-sky-600">
            Quickly add expenses with categories, dates, and notes. Supports
            multiple currencies.
          </p>
        </div>
        <div
          class="bg-sky-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          <h4 class="text-2xl font-semibold text-sky-700 mb-4">
            Insightful Reports
          </h4>
          <p class="text-sky-600">
            Generate charts and summaries to visualize your spending patterns
            over time.
          </p>
        </div>
        <div
          class="bg-sky-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          <h4 class="text-2xl font-semibold text-sky-700 mb-4">
            Secure & Private
          </h4>
          <p class="text-sky-600">
            Your data is encrypted and stored securely. No ads, no data selling.
          </p>
        </div>
      </div>
    </div>
  </section>`,
})
export class Features {}
