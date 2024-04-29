import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SampleComponent } from './sample/sample.component';

import { CustomerListComponent } from './customer-list/customer-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SampleComponent, CustomerListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo';
}
