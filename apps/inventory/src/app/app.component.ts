import { ProductListComponent } from '@angular-monorepo/products';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [ProductListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'inventory';
}
