import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-2xl overflow-hidden card-hover h-full flex flex-col border border-gray-100 group">
      <div class="relative overflow-hidden">
        <img [src]="imageUrl" [alt]="title" class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-ges-dark/60 to-transparent"></div>
        <div *ngIf="metric" class="absolute bottom-4 left-4 glass rounded-lg px-3 py-2 text-white">
          <div class="text-lg font-bold">{{ metric }}</div>
          <div class="text-xs text-white/70">{{ metricLabel }}</div>
        </div>
      </div>
      <div class="p-6 grow flex flex-col">
        <h3 class="text-xl font-bold text-ges-dark mb-2">{{ title }}</h3>
        <p class="text-sm text-ges-gray mb-4 grow leading-relaxed">{{ description }}</p>
        <div class="flex flex-wrap gap-2">
          <span *ngFor="let tag of tags"
                class="px-3 py-1 rounded-full text-xs font-medium bg-ges-green/10 text-ges-green border border-ges-green/20">
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
  @Input() metric?: string;
  @Input() metricLabel?: string;
}