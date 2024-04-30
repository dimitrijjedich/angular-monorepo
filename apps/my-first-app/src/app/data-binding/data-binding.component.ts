import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  username: string = '';
  isDisabled: boolean = true;

  onUsernameInput($event: Event) {
    this.isDisabled = !(<HTMLInputElement>$event.target).value;
  }

  onButtonClick() {
    this.username = '';
  }
}
