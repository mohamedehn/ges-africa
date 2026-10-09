import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterDirective, ParallaxDirective, TiltDirective } from '../../../shared/directives/motion.directives';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, CounterDirective, ParallaxDirective, TiltDirective],
  template: `
    <div appTilt="4" class="h-full">
      <article class="relative overflow-hidden rounded-3xl h-120 md:h-136 group bg-ges-dark shadow-xl hover:shadow-2xl hover:shadow-ges-green/10 transition-shadow duration-500">
        <img appParallax="0.07" [src]="imageUrl" [alt]="title"
             class="absolute -top-[10%] left-0 w-full h-[120%] object-cover transition-transform duration-1200 ease-out group-hover:scale-110">
        <div class="absolute inset-0 bg-linear-to-t from-ges-dark via-ges-dark/55 to-ges-dark/5"></div>
        <div class="absolute inset-0 bg-ges-green/0 group-hover:bg-ges-green/10 transition-colors duration-700"></div>

        <!-- Métrique -->
        <div *ngIf="metric" class="absolute top-5 right-5 glass rounded-2xl px-4 py-3 text-white text-right">
          <div class="font-display text-2xl font-bold text-ges-green leading-none">
            <span *ngIf="numeric !== null; else plain" [appCounter]="numeric!" [suffix]="suffix">{{ metric }}</span>
            <ng-template #plain>{{ metric }}</ng-template>
          </div>
          <div class="text-[0.65rem] uppercase tracking-widest text-white/70 mt-1">{{ metricLabel }}</div>
        </div>

        <div class="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span *ngFor="let tag of tags"
                  class="px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur text-white border border-white/20">
              {{ tag }}
            </span>
          </div>
          <h3 class="font-display text-2xl md:text-3xl font-bold text-white mb-3">{{ title }}</h3>
          <p class="text-sm md:text-base text-white/70 leading-relaxed max-w-md">{{ description }}</p>
          <div class="mt-5 h-0.5 w-12 bg-ges-green group-hover:w-full transition-all duration-700"></div>
        </div>
      </article>
    </div>
  `,
  host: { class: 'block h-full' }
})
export class ProjectCardComponent {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() tags!: string[];
  @Input() metric?: string;
  @Input() metricLabel?: string;

  /** "30%" → 30 (compteur animé) ; "multi-MW" → null (texte tel quel) */
  get numeric(): number | null {
    const m = this.metric?.match(/^(\d+(?:\.\d+)?)/);
    return m ? parseFloat(m[1]) : null;
  }

  get suffix(): string {
    return this.metric?.replace(/^\d+(?:\.\d+)?/, '') ?? '';
  }
}
