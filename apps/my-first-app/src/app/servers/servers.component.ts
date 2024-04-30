import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: '[app-servers]',
  standalone: true,
  imports: [CommonModule, ServerComponent],
  templateUrl: './servers.component.html',
  styles: ['h4 { color: red;}'],
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!'
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreatServer() {
    this.serverCreationStatus = 'Server was created';
  }
}
