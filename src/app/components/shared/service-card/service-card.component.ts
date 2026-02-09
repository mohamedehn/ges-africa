import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-xl shadow-sm hover:shadow-lg transition h-full flex flex-col overflow-hidden">
      <img *ngIf="imageUrl" [src]="imageUrl" [alt]="title" class="w-full h-48 object-cover">
      <div class="p-8 grow flex flex-col">
        <h3 class="text-xl font-bold text-ges-dark mb-3">
          <i [class]="'fas ' + icon + ' text-ges-green mr-2'"></i>
          {{ title }}
        </h3>
        <p class="text-gray-600 grow">{{ description }}</p>
      </div>
    </div>
  `
})
export class ServiceCardComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl?: string;
}
