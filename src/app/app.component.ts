import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SampleComponent } from './sample/sample.component';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SampleComponent,
    CustomerListComponent,
    SearchCustomerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo';
}
