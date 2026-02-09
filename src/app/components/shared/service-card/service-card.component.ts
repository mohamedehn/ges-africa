import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
      <div class="w-16 h-16 bg-secondary bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
        <i [class]="'fas ' + icon + ' text-ges-green text-2xl'"></i>
      </div>
      <h3 class="text-xl font-bold text-ges-dark mb-3">{{ title }}</h3>
      <p class="text-gray-600">{{ description }}</p>
    </div>
  `
})
export class ServiceCardComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() description!: string;
}
