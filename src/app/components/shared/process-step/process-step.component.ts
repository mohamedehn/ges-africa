import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process-step',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="text-center h-full flex flex-col group">
      <div class="relative mb-5 mx-auto">
        <!-- Step number -->
        <div class="text-xs font-bold mb-2 tracking-widest uppercase"
             [class]="darkMode ? 'text-ges-green/60' : 'text-ges-green/80'">
          Étape {{ stepNumber }}
        </div>
        <!-- Icon -->
        <div class="w-14 h-14 rounded-xl flex items-center justify-center mx-auto transition-all duration-300"
             [class]="darkMode ? 'bg-white/10 group-hover:bg-ges-green' : 'bg-ges-green/10 group-hover:bg-ges-green'">
          <i *ngIf="icon" [class]="'fas ' + icon + ' text-lg transition-colors duration-300 ' + (darkMode ? 'text-ges-green group-hover:text-white' : 'text-ges-green group-hover:text-white')"></i>
          <span *ngIf="!icon" class="text-lg font-bold transition-colors duration-300"
                [class]="darkMode ? 'text-ges-green group-hover:text-white' : 'text-ges-green group-hover:text-white'">
            {{ stepNumber }}
          </span>
        </div>
      </div>
      <h3 class="text-base font-bold mb-2"
          [class]="darkMode ? 'text-white' : 'text-ges-dark'">{{ title }}</h3>
      <p class="text-sm grow leading-relaxed"
         [class]="darkMode ? 'text-white/50' : 'text-ges-gray'">{{ description }}</p>
    </div>
  `
})
export class ProcessStepComponent {
  @Input() stepNumber!: number;
  @Input() title!: string;
  @Input() description!: string;
  @Input() icon?: string;
  @Input() darkMode = false;
}
