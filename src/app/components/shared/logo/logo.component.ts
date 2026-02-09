import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center">
      <img [src]="'/logo.jpg'" [alt]="'GES Africa Logo'" [class]="logoSizeClass" />
    </div>
  `
})
export class LogoComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  get logoSizeClass(): string {
    const sizes = {
      small: 'h-12',
      medium: 'h-20',
      large: 'h-28'
    };
    return sizes[this.size];
  }
}
