import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})

export class DirectivesComponent {
  displayText: boolean = false;
  clickCounter = [0];
  onButtonClick() {
    this.displayText = !this.displayText;
    this.clickCounter.push(this.clickCounter[this.clickCounter.length-1]+1);
  }
}
