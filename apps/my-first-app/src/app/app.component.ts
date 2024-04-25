import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServerComponent } from './server/server.component';

@Component({
  standalone: true,
  imports: [RouterModule, ServerComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
