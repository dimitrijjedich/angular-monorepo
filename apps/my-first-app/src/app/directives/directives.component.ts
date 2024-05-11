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
  clickCounter: Date[] = [];
  onButtonClick() {
    this.displayText = !this.displayText;
    this.clickCounter.push(new Date());
  }

  getColor(value: number) {
    return  value >= 5 ? 'blue' : 'white';
  }

}
