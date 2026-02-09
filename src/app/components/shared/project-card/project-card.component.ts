import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gray-50 rounded-xl overflow-hidden card-hover">
      <img [src]="imageUrl" [alt]="title" class="w-full h-64 object-cover">
      <div class="p-6">
        <h3 class="text-2xl font-bold text-ges-dark mb-3">{{ title }}</h3>
        <p class="text-gray-600 mb-4">{{ description }}</p>
        <div class="flex flex-wrap gap-2">
          <span *ngFor="let tag of tags" class="bg-secondary bg-opacity-10 text-ges-green px-3 py-1 rounded-full text-sm font-medium">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  `
})
export class ProjectCardComponent {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() tags!: string[];
}
