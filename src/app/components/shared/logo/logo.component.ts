import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a href="#" class="flex items-center gap-2.5 no-underline">
      <!-- SVG Icon -->
      <svg [class]="iconSizeClass" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Navy/White circle arc (~260°, left side) -->
        <path d="M 296 328 A 160 160 0 1 1 296 72"
              [attr.stroke]="mainColor" stroke-width="34" fill="none"/>

        <!-- Green arc (~75°, right side) with rounded caps -->
        <path d="M 330 100 A 160 160 0 0 1 330 300"
              stroke="#7AC143" stroke-width="34" fill="none" stroke-linecap="round"/>

        <!-- Lightning bolt / energy S-shape -->
        <path d="M 175 68 L 240 68 L 240 100 L 195 185 L 255 185 L 255 215 L 160 340 L 160 308 L 205 215 L 145 215 L 145 185 L 200 100 L 175 100 Z"
              [attr.fill]="mainColor"/>
      </svg>

      <!-- Text: GES + AFRICA -->
      <div class="flex flex-col leading-none">
        <span [class]="textClass" [style.color]="mainColor" class="font-extrabold tracking-tight">GES</span>
        <span [class]="subtextClass" class="font-bold tracking-[0.15em]" style="color: #7AC143">AFRICA</span>
      </div>
    </a>
  `
})
export class LogoComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() theme: 'light' | 'dark' = 'light';

  get mainColor(): string {
    return this.theme === 'dark' ? '#FFFFFF' : '#2D3E50';
  }

  get iconSizeClass(): string {
    const sizes = { small: 'w-9 h-9', medium: 'w-11 h-11', large: 'w-14 h-14' };
    return sizes[this.size];
  }

  get textClass(): string {
    const sizes = { small: 'text-lg', medium: 'text-xl', large: 'text-2xl' };
    return sizes[this.size];
  }

  get subtextClass(): string {
    const sizes = { small: 'text-[0.55rem]', medium: 'text-[0.65rem]', large: 'text-xs' };
    return sizes[this.size];
  }
}
