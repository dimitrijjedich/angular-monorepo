import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    DataBindingComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
