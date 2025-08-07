import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  template: ` <div
    class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
  >
    <h2 class="text-2xl font-bold mb-4">Register</h2>
    <form class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Name</label
        >
        <input
          type="text"
          id="name"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label for="contact" class="block text-sm font-medium text-gray-700"
          >Contact</label
        >
        <input
          type="number"
          id="contact"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          type="email"
          id="email"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700"
          >Password</label
        >
        <input
          type="password"
          id="password"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          required
        />
      </div>
      <button
        type="submit"
        class="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300"
      >
        Register
      </button>
    </form>
    <p class="mt-4 text-sm text-gray-600">
      Already have an account?
      <a routerLink="/login" class="text-sky-600 hover:underline">Login here</a
      >.
    </p>
  </div>`,
  imports: [RouterLink],
})
export class Register {}
