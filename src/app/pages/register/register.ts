import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthApi } from '../../shared/services/auth-api';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-register',
  template: ` <div
    class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
  >
    <h2 class="text-2xl font-bold mb-4">Register</h2>
    <form class="space-y-4" [formGroup]="registerForm">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Name</label
        >
        <input
          type="text"
          formControlName="name"
          id="name"
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
          formControlName="email"
          id="email"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label for="phoneNumber" class="block text-sm font-medium text-gray-700"
          >Phone Number</label
        >
        <input
          type="number"
          formControlName="phoneNumber"
          id="phoneNumber"
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
          formControlName="password"
          id="password"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          required
        />
      </div>
      <button
        type="submit"
        class="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300" (click)="register()"
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
  imports: [RouterLink, ReactiveFormsModule],
})
export class Register {
authApi = inject(AuthApi);
router = inject(Router);
toast = inject(NgToastService);

fb = inject(FormBuilder);

registerForm = this.fb.group({
    name:['',Validators.required],
     email:['', Validators.compose([Validators.required, Validators.email])],
    phoneNumber:['',Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])],
   
    password:['',Validators.compose([Validators.maxLength(9), Validators.minLength(6)])]
})


register(){
  if(this.registerForm.valid){
    const { name, email, phoneNumber, password } = this.registerForm.value;
    if(name && email && phoneNumber && password){
    this.authApi.register(name, email, Number(phoneNumber), password).subscribe({
      next: (response:any) =>{
            alert("sign up succesfully");
            this.registerForm.reset();
            this.router.navigate(['login'])
      },
       error: (error) => {
            console.error('Register failed:', error);
            this.toast.danger('Register failed. Please check your credentials.');
          },
    })
    }

  }else{
    this.toast.warning('Please fill in all required fields.');

  }

}
}
