import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process-step',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="text-center h-full flex flex-col group">
      <div class="relative mb-5">
        <div class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto transition-all duration-300"
             [class]="darkMode ? 'bg-white/10 group-hover:bg-ges-green' : 'bg-ges-green/10 group-hover:bg-ges-green'">
          <i *ngIf="icon" [class]="'fas ' + icon + ' text-xl transition-colors duration-300 ' + (darkMode ? 'text-ges-green group-hover:text-white' : 'text-ges-green group-hover:text-white')"></i>
          <span *ngIf="!icon" class="text-xl font-bold transition-colors duration-300"
                [class]="darkMode ? 'text-ges-green group-hover:text-white' : 'text-ges-green group-hover:text-white'">
            {{ stepNumber }}
          </span>
        </div>
        <div class="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
             [class]="darkMode ? 'bg-ges-green/20 text-ges-green' : 'bg-ges-dark text-white'">
          {{ stepNumber }}
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
