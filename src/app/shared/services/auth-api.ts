import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '../constants/api-url.constants';
import { LoginResponse } from '../../pages/login/types/login-response';

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  http = inject(HttpClient);
  login(email: string, password: string) {
    return this.http.post<LoginResponse>(`${API_URL}/users/login`, { email, password });
  }

  register(name: string, email: string, phoneNumber: number, password: string) {
    return this.http.post(`${API_URL}/users/register`, { name, email, phoneNumber, password });
  }

  logout() {
    return this.http.post(`${API_URL}/users/logout`, {});
  }

  addTransaction(amount: number, type: string, category:string, date:Date, reference: string, description:string){
    return this.http.post(`${API_URL}/transactions/add-transaction`, { amount, type, category, date, reference, description });
  }
  
  getAllTransaction(){
    return this.http.post(`${API_URL}/transections/get-transection`,{});
  }
}
