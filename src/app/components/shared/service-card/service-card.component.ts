import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotlightDirective } from '../../../shared/directives/motion.directives';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, SpotlightDirective],
  template: `
    <div appSpotlight
         class="rounded-3xl p-7 md:p-9 h-full flex flex-col border border-white/10 bg-white/3 group transition-all duration-500 hover:border-ges-green/50 hover:-translate-y-1.5">
      <div class="flex items-start justify-between mb-8">
        <div class="w-14 h-14 bg-ges-green/10 rounded-2xl flex items-center justify-center group-hover:bg-ges-green group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
          <i [class]="'fas ' + icon + ' text-ges-green text-xl group-hover:text-ges-dark transition-colors duration-500'"></i>
        </div>
        <span class="font-display text-5xl font-bold text-outline select-none group-hover:text-ges-green/30 transition-colors duration-500">
          {{ index < 10 ? '0' + index : index }}
        </span>
      </div>
      <h3 class="font-display text-xl md:text-2xl font-bold text-white mb-3">{{ title }}</h3>
      <p class="text-white/55 mb-6 grow text-sm md:text-base leading-relaxed">{{ description }}</p>
      <ul *ngIf="details?.length" class="space-y-2.5 pt-5 border-t border-white/10">
        <li *ngFor="let detail of details" class="flex items-center text-sm text-white/80">
          <i class="fas fa-arrow-right text-ges-green text-[0.65rem] mr-3 transition-transform duration-300 group-hover:translate-x-1"></i>
          {{ detail }}
        </li>
      </ul>
    </div>
  `,
  host: { class: 'block h-full' }
})
export class ServiceCardComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() details?: string[];
  @Input() index = 1;
}
