import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '../../../shared/constants/api-url.constants';
import { Observable } from 'rxjs';

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
    description: string
  ) {
    return this.http.post(`${API_URL}/transactions/add-transaction`, {
      amount,
      type,
      category,
      date,
      description
    });
  }

  getAllTransaction() {
    return this.http.get(`${API_URL}/transactions/get-transaction`);
  }

  deleteTransaction(transactionId: string){
    return this.http.delete(`${API_URL}/transactions/delete-transaction/${transactionId}`)
  }

  getOneTransaction(transactionId: string){
    return this.http.get(`${API_URL}/transactions/get-one-transaction/${transactionId}`)
  }

 editTransaction(transactionId: string, updatedData: any) {
  return this.http.put(`${API_URL}/transactions/edit-transaction/${transactionId}`, updatedData);
}


  }
