import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process-step',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="process-step text-center">
      <div class="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
        <span class="text-white text-2xl font-bold">{{ stepNumber }}</span>
      </div>
      <h3 class="text-lg font-bold text-ges-dark mb-2">{{ title }}</h3>
      <p class="text-sm text-gray-600">{{ description }}</p>
    </div>
  `
})
export class ProcessStepComponent {
  @Input() stepNumber!: number;
  @Input() title!: string;
  @Input() description!: string;
}
