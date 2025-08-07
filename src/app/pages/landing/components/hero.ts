import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section class="flex-grow flex items-center justify-center py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-5xl font-extrabold text-sky-800 mb-6">
          Track Your Expenses Effortlessly
        </h2>
        <p class="text-xl text-sky-700 mb-8">
          Monitor your spending, categorize expenses, and gain insights into
          your financial habits with our intuitive app.
        </p>
        <button
          class="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
        >
          Get Started Free
        </button>
      </div>
    </section>
  `,
})
export class Hero {}
