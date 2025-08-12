import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthApi } from '../../../shared/services/auth-api';
import { CurrencyPipe } from '@angular/common';
import { TransactionApi } from '../services/transaction-api';

@Component({
  selector: 'app-transactions',
  imports: [ReactiveFormsModule, FormsModule],
  template: ` <div>
      <div class="flex justify-end">
        <button
          command="show-modal"
          commandfor="dialog"
          class="rounded-md bg-sky-700 px-2.5 py-1.5 mb-4 font-semibold text-white hover:bg-sky-700"
        >
          Add Todo
        </button>
        <div>
          <dialog
            id="dialog"
            aria-labelledby="dialog-title"
            class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent"
          >
            <div
              class="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            ></div>
            <div
              tabindex="0"
              class="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0"
            >
              <div
                class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
              >
                <div class="bg-white px-4 pt-5 pb-4 ">
                  <div class="">
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <form
                        class="max-w-md mx-auto"
                        [formGroup]="transactionForm"
                      >
                        <!-- Amount -->
                        <div class="mb-4">
                          <label
                            for="amount"
                            class="block text-sm font-semibold text-gray-800 mb-2"
                            >Amount</label
                          >
                          <input
                            type="number"
                            id="amount"
                            name="amount"
                            placeholder="Enter amount"
                            class="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm placeholder-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                            formControlName="amount"
                          />
                        </div>
                        <!-- Type -->
                        <div class="mb-4">
                          <label
                            for="type"
                            class="block text-sm font-semibold text-gray-800 mb-2"
                            >Type</label
                          >
                          <select
                            id="type"
                            name="type"
                            class="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                            formControlName="type"
                          >
                            <option value="" disabled selected>
                              Select type
                            </option>
                            <option value="Income">Income</option>
                            <option value="Expense">Expense</option>
                          </select>
                        </div>
                        <!-- Category -->
                        <div class="mb-4">
                          <label
                            for="category"
                            class="block text-sm font-semibold text-gray-800 mb-2"
                            >Category</label
                          >
                          <select
                            id="category"
                            name="category"
                            class="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                            formControlName="category"
                          >
                            <option value="" disabled selected>
                              Select category
                            </option>
                            <option>Tip</option>
                            <option>Stationary</option>
                            <option>Food</option>
                            <option>Movie</option>
                            <option>Bills</option>
                            <!-- <optgroup label="Income">
													<option>Salary</option>
													<option>Part Time</option>
													<option>Project</option>
													<option>Freelancing</option>
												</optgroup> -->
                            <!-- <optgroup label="Expense">
													<option>Tip</option>
													<option>Stationary</option>
													<option>Food</option>
													<option>Movie</option>
													<option>Bills</option>
													<option>Medical</option>
													<option>Fees</option>
													<option>TAX</option>
												</optgroup> -->
                          </select>
                        </div>
                        <!-- Date -->
                        <div class="mb-4">
                          <label
                            for="date"
                            class="block text-sm font-semibold text-gray-800 mb-2"
                            >Date</label
                          >
                          <input
                            type="date"
                            id="date"
                            name="date"
                            class="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                            formControlName="date"
                          />
                        </div>
                        <!-- Reference -->
                        <div class="mb-4">
                          <label
                            for="reference"
                            class="block text-sm font-semibold text-gray-800 mb-2"
                            >Reference</label
                          >
                          <input
                            type="text"
                            id="reference"
                            name="reference"
                            placeholder="Enter reference"
                            class="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm placeholder-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                            formControlName="reference"
                          />
                        </div>
                        <!-- Description -->
                        <div class="mb-4">
                          <label
                            for="description"
                            class="block text-sm font-semibold text-gray-800 mb-2"
                            >Description</label
                          >
                          <textarea
                            id="description"
                            name="description"
                            rows="3"
                            placeholder="Enter description"
                            class="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm placeholder-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                            formControlName="description"
                          ></textarea>
                        </div>
                        <!-- Submit Button -->
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
                >
                  <button
                    type="button"
                    command="close"
                    commandfor="dialog"
                    class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                    (click)="postTransaction()"
                  >
                    submit
                  </button>
                  <button
                    type="button"
                    command="close"
                    commandfor="dialog"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-6 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
    <div class="overflow-x-auto">
      <table
        class="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg"
      >
        <thead class="bg-gradient-to-r from-sky-700 to-indigo-700 text-white">
          <tr>
            <th
              class="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider"
            >
              Amount
            </th>
            <th
              class="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider"
            >
              Type
            </th>
            <th
              class="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider"
            >
              Category
            </th>
            <th
              class="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider"
            >
              Date
            </th>
            <th
              class="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider"
            >
              Reference
            </th>
            <th
              class="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider"
            >
              Description
            </th>
            <th
              class="px-4 py-3 text-right text-sm font-semibold uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          @for (transaction of transactions; track transaction.transactionId) {
          <tr
            class="hover:bg-slate-100 even:bg-slate-50 transition-colors duration-200"
          >
            <td class="px-4 py-3 font-medium text-green-600">
              {{ transaction.amount }}
            </td>
            <td class="px-4 py-3">{{ transaction.type }}</td>
            <td class="px-4 py-3">{{ transaction.category }}</td>
            <td class="px-4 py-3">{{ transaction.date }}</td>
            <td class="px-4 py-3">{{ transaction.reference }}</td>
            <td class="px-4 py-3">{{ transaction.description }}</td>
            <td class="px-4 py-3 text-right">
              <button
                class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Edit
              </button>
              <button
                class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition ml-2"
              >
                Delete
              </button>
            </td>
          </tr>
          }
        </tbody>
      </table>
    </div>`,
})
export class Transactions implements OnInit {
  fb = inject(FormBuilder);
  authApi = inject(AuthApi);
  transactionApi = inject(TransactionApi);
  transactions: any = [];

  ngOnInit(): void {
    this.getAllTransaction();
  }

  transactionForm: FormGroup = this.fb.group({
    amount: ['', Validators.required],
    type: ['', Validators.required],
    category: ['', Validators.required],
    date: ['', Validators.required],
    reference: ['', Validators.required],
    description: ['', Validators.required],
  });

  postTransaction() {
    if (this.transactionForm.valid) {
      const { amount, type, category, date, reference, description } =
        this.transactionForm.value;
      this.authApi
        .addTransaction(
          Number(amount),
          type,
          category,
          date,
          reference,
          description
        )
        .subscribe({
          next: (response: any) => {
            alert('Transaction added successfully');
            this.transactions = response;
            console.log(response);
            this.transactionForm.reset();
          },
          error: (error) => {
            console.error('Register failed:', error);
          },
        });
    } else {
      this.transactionForm.markAllAsTouched();
    }
  }

  getAllTransaction() {
    this.transactionApi.getAllTransaction().subscribe({
      next: (response: any) => {
        this.transactions = response.transactions;
      },
      error: (error) => {
        console.error('Failed to fetch transactions:', error);
      },
    });
  }
}
