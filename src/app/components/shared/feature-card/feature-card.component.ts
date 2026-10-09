import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="text-center h-full flex flex-col p-6 rounded-2xl hover:bg-ges-light transition-colors group">
      <div class="w-16 h-16 bg-ges-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-ges-green transition-colors duration-300">
        <i [class]="'fas ' + icon + ' text-ges-green text-2xl group-hover:text-white transition-colors duration-300'"></i>
      </div>
      <h3 class="text-lg font-bold text-ges-dark mb-3">{{ title }}</h3>
      <p class="text-sm text-ges-gray grow leading-relaxed">{{ description }}</p>
    </div>
  `
})
export class FeatureCardComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() description!: string;
}
