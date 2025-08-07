import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: ` <footer class="bg-sky-700 py-6">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sky-200"
    >
      <p>&copy; 2025 Expense Tracker. All rights reserved.</p>
      <div class="mt-2 space-x-4">
        <a href="#" class="hover:text-white">Privacy Policy</a>
        <a href="#" class="hover:text-white">Terms of Service</a>
        <a href="#" class="hover:text-white">Contact Us</a>
      </div>
    </div>
  </footer>`,
})
export class Footer {}
