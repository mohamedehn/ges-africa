import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotlightDirective } from '../../../shared/directives/motion.directives';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule, SpotlightDirective],
  template: `
    <div appSpotlight
         class="h-full flex flex-col p-7 rounded-3xl bg-white border border-gray-100 shadow-sm group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ges-dark/10 hover:border-ges-green/40">
      <div class="w-16 h-16 bg-ges-dark rounded-2xl flex items-center justify-center mb-7 group-hover:bg-ges-green group-hover:rotate-6 group-hover:scale-105 transition-all duration-500">
        <i [class]="'fas ' + icon + ' text-ges-green text-2xl group-hover:text-ges-dark transition-colors duration-500'"></i>
      </div>
      <h3 class="font-display text-xl font-bold text-ges-dark mb-3">{{ title }}</h3>
      <p class="text-sm text-ges-gray grow leading-relaxed">{{ description }}</p>
      <div class="mt-6 h-0.5 w-10 bg-ges-green/40 group-hover:w-full group-hover:bg-ges-green transition-all duration-700"></div>
    </div>
  `,
  host: { class: 'block h-full' }
})
export class FeatureCardComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() description!: string;
}
