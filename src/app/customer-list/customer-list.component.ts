import { Component } from '@angular/core';
import { Customer } from './customer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css',
})
export class CustomerListComponent {
  selectedCustomer: any;

  customers: Customer[] = [
    {
      customerNo: 1,
      name: 'John Doe',
      address: '123 Main St',
      city: 'New York',
      country: 'USA',
    },
    {
      customerNo: 2,
      name: 'Jane Smith',
      address: '456 Elm St',
      city: 'Los Angeles',
      country: 'USA',
    },
    {
      customerNo: 3,
      name: 'Alice Johnson',
      address: '789 Oak St',
      city: 'Chicago',
      country: 'USA',
    },
    {
      customerNo: 4,
      name: 'Bob Brown',
      address: '101 Pine St',
      city: 'London',
      country: 'UK',
    },
    {
      customerNo: 5,
      name: 'Emma White',
      address: '202 Maple St',
      city: 'Sydney',
      country: 'Australia',
    },
    {
      customerNo: 6,
      name: 'Michael Wang',
      address: '333 Bay St',
      city: 'Toronto',
      country: 'Canada',
    },
  ];
}
