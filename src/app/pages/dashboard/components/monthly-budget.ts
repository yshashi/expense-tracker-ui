import { Component } from "@angular/core";

@Component({
    selector:'app-monthly-budget',
    template:`<div class="basis-1/3">
          <div class="p-4 shadow-2xl shadow-gray-300 m-1 rounded-lg bg-white outline outline-gray-200">
            <h1 class="text-lg font-bold text-sky-900 mb-6">Monthly Budget</h1>
            <div>
                <div class="flex">
                <div class="bg-green-600 text-white w-8 h-8 text-center p-0.5 rounded-full">
                    <i class="fa fa-shopping-basket"></i>
                </div>
              <div class="flex  justify-between w-full">
                  <div class="ml-4">
                    <p class="text-md text-sky-900 font-bold ">Grocery Stores</p>
                </div>
                <div>
                    <p><span class="text-sky-900 font-bold">75</span><span class="text-gray-600 ">/100</span></p>
                </div>
              </div>
            </div>
            <div class="progress ml-10">
                <div class="w-full bg-gray-200 rounded-full h-[8px]">
                 <div class="bg-green-500 h-[8px] rounded-full transition-all duration-500 ease-in-out" style="width: 45%"></div>
                </div>
            </div>
            </div>

             <div class="mt-5">
                <div class="flex">
                <div class="bg-blue-500 text-white w-8 h-8 text-center p-0.5 rounded-full">
                    <i class="fa fa-shopping-basket"></i>
                </div>
              <div class="flex  justify-between w-full">
                  <div class="ml-4">
                    <p class="text-md text-sky-900 font-bold ">Transportation</p>
                </div>
                <div>
                    <p><span class="text-sky-900 font-bold">75</span><span class="text-gray-600 ">/100</span></p>
                </div>
              </div>
            </div>
            <div class="progress ml-10">
                <div class="w-full bg-gray-200 rounded-full h-[8px]">
  <div class="bg-blue-500 h-[8px] rounded-full" style="width: 50%"></div>
</div>
            </div>
            </div>

              <div class="mt-5">
                <div class="flex">
                <div class="bg-amber-900  text-white w-8 h-8 text-center p-0.5 rounded-full">
                    <i class="fa fa-shopping-basket"></i>
                </div>
              <div class="flex  justify-between w-full">
                  <div class="ml-4">
                    <p class="text-md text-sky-900 font-bold ">Pets</p>
                </div>
                <div>
                    <p><span class="text-sky-900 font-bold">75</span><span class="text-gray-600 ">/100</span></p>
                </div>
              </div>
            </div>
            <div class="progress ml-10">
                <div class="w-full bg-gray-200 rounded-full h-[8px]">
                <div class="bg-amber-900 h-[8px] rounded-full w-1/2" style="width: 50%"></div>
                </div>
            </div>
            </div>

             <div class="mt-5">
                <div class="flex">
                <div class="bg-indigo-500  text-white w-8 h-8 text-center p-0.5 rounded-full">
                    <i class="fa fa-shopping-basket"></i>
                </div>
              <div class="flex  justify-between w-full">
                  <div class="ml-4">
                    <p class="text-md text-sky-900 font-bold ">Education</p>
                </div>
                <div>
                    <p><span class="text-sky-900 font-bold">75</span><span class="text-gray-600 ">/100</span></p>
                </div>
              </div>
            </div>
            <div class="progress ml-10">
                <div class="w-full bg-gray-200 rounded-full h-[8px]">
                <div class="bg-indigo-500 h-[8px] rounded-full" style="width: 50%"></div>
                </div>
            </div>
            </div>

              <div class="mt-5">
                <div class="flex">
                <div class="bg-violet-500  text-white w-8 h-8 text-center p-0.5 rounded-full">
                    <i class="fa fa-shopping-basket"></i>
                </div>
              <div class="flex  justify-between w-full">
                  <div class="ml-4">
                    <p class="text-md text-sky-900 font-bold ">Clothes</p>
                </div>
                <div>
                    <p><span class="text-sky-900 font-bold">75</span><span class="text-gray-600 ">/100</span></p>
                </div>
              </div>
            </div>
            <div class="progress ml-10">
                <div class="w-full bg-gray-200 rounded-full h-[8px]">
                <div class="bg-violet-500 h-[8px] rounded-full" style="width: 50%"></div>
                </div>
            </div>
            </div>
          </div>
    </div>`
})
export class MonthlyBudget{
    
}