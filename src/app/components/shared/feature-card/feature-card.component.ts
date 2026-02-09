import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="text-center h-full flex flex-col">
      <div class="w-20 h-20 bg-ges-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
        <i [class]="'fas ' + icon + ' text-ges-green text-3xl'"></i>
      </div>
      <h3 class="text-xl font-bold text-ges-dark mb-3">{{ title }}</h3>
      <p class="text-gray-600 flex-grow">{{ description }}</p>
    </div>
  `
})
export class FeatureCardComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() description!: string;
}
