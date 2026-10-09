import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Étape de la timeline : son intensité dépend de --p (parent) et --i (index). */
@Component({
  selector: 'app-process-step',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tl-step relative flex lg:flex-col gap-6 lg:gap-0 lg:text-center items-start lg:items-center h-full group">
      <!-- Nœud sur la ligne -->
      <div class="tl-node relative z-10 shrink-0 w-16 h-16 rounded-2xl border-2 flex items-center justify-center transition-transform duration-300 lg:mb-8 group-hover:scale-110">
        <i *ngIf="icon" [class]="'fas ' + icon + ' text-xl text-white'"></i>
        <span *ngIf="!icon" class="text-xl font-bold text-white">{{ stepNumber }}</span>
      </div>
      <div>
        <div class="text-xs font-bold mb-2 tracking-[0.25em] uppercase text-ges-green">
          Étape {{ stepNumber }}
        </div>
        <h3 class="font-display text-xl md:text-2xl font-bold mb-2 text-white">{{ title }}</h3>
        <p class="text-sm leading-relaxed text-white/55 lg:max-w-56 mx-auto">{{ description }}</p>
      </div>
    </div>
  `,
  host: { class: 'block' }
})
export class ProcessStepComponent {
  @Input() stepNumber!: number;
  @Input() title!: string;
  @Input() description!: string;
  @Input() icon?: string;
  /** conservé pour compatibilité : la timeline est désormais toujours sur fond sombre */
  @Input() darkMode = true;
}
