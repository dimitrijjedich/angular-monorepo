import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: '[app-servers]',
  standalone: true,
  imports: [CommonModule, ServerComponent, FormsModule],
  templateUrl: './servers.component.html',
  styles: ['h4 { color: red;}'],
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!'
  serverCreated = false;
  serverName: string = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreatServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName($event: Event) {
    this.serverName = (<HTMLInputElement>$event.target).value;
  }
}
