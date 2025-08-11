import { Component } from "@angular/core";

@Component({
    selector:'app-total-period-change',
    template:` <div class="basis-1/4">
      <div class="p-4 shadow-2xl shadow-gray-300 m-1 rounded-lg bg-white outline outline-gray-200">
        <h1 class="text-md font-semibold text-sky-900 mb-4">
          Total Period Income
        </h1>

        <h1 class="text-3xl font-bold text-sky-900">$1000</h1>

        <hr class="my-4 border-gray-300">

        <div>
          <p class="text-gray-500 text-sm">
            Last Month 
            <span class="font-bold text-gray-500">$250</span>
          </p>
        </div>
      </div>
    </div>`
})
export class TotalPeriodChange{

}