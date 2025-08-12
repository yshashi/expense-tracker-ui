import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '../../../shared/constants/api-url.constants';

@Injectable({
  providedIn: 'root',
})
export class TransactionApi {
  http = inject(HttpClient);

  addTransaction(
    amount: number,
    type: string,
    category: string,
    date: Date,
    reference: string,
    description: string
  ) {
    return this.http.post(`${API_URL}/transactions/add-transaction`, {
      amount,
      type,
      category,
      date,
      reference,
      description,
    });
  }

  getAllTransaction() {
    return this.http.post(`${API_URL}/transactions/get-transaction`, {
      frequency: '7',
      selectedDate: [],
      type: 'all',
    });
  }
}
