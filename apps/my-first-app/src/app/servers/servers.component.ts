import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [CommonModule, ServerComponent],
  template: '<app-server></app-server><app-server></app-server>',
  styleUrl: './servers.component.css',
})
export class ServersComponent {}
