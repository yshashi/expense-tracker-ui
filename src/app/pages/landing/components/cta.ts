import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  template: `
    <section class="bg-gradient-to-r from-sky-500 to-sky-600 py-20 text-center">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 class="text-4xl font-bold text-white mb-6">
          Ready to Take Control of Your Finances?
        </h3>
        <p class="text-xl text-sky-100 mb-8">
          Sign up today and start tracking your expenses in minutes.
        </p>
        <button
          class="bg-white hover:bg-sky-100 text-sky-600 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
        >
          Sign Up Now
        </button>
      </div>
    </section>
  `,
})
export class Cta {}
