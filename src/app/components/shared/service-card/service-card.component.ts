import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-2xl p-8 card-hover h-full flex flex-col border border-gray-100 group">
      <div class="w-14 h-14 bg-ges-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-ges-green group-hover:scale-110 transition-all duration-300">
        <i [class]="'fas ' + icon + ' text-ges-green text-xl group-hover:text-white transition-colors duration-300'"></i>
      </div>
      <h3 class="text-xl font-bold text-ges-dark mb-3">{{ title }}</h3>
      <p class="text-ges-gray mb-5 grow text-sm leading-relaxed">{{ description }}</p>
      <ul *ngIf="details?.length" class="space-y-2">
        <li *ngFor="let detail of details" class="flex items-center text-sm text-ges-dark">
          <i class="fas fa-check text-ges-green text-xs mr-2.5"></i>
          {{ detail }}
        </li>
      </ul>
    </div>
  `
})
export class ServiceCardComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() details?: string[];
}
