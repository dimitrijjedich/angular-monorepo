import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: '[app-servers]',
  standalone: true,
  imports: [CommonModule, ServerComponent],
  template: '<h4>I\'m in the ServersComponent</h4><app-server></app-server><app-server></app-server>',
  styles: ['h4 { color: red;}'],
})
export class ServersComponent {}
