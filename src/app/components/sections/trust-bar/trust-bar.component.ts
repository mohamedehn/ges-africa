import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TrustItem {
  icon: string;
  text: string;
}

@Component({
  selector: 'app-trust-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-white py-8 border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div *ngFor="let item of trustItems" class="text-center">
            <i [class]="'fas ' + item.icon + ' text-ges-green text-2xl md:text-3xl mb-2'"></i>
            <p class="text-xs md:text-sm font-medium text-ges-dark">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TrustBarComponent {
  trustItems: TrustItem[] = [
    { icon: 'fa-shield-alt', text: 'Indépendant, orienté performance' },
    { icon: 'fa-file-code', text: 'Livrables exploitables' },
    { icon: 'fa-check-circle', text: 'Conformité & sécurité' },
    { icon: 'fa-chart-line', text: 'Approche ROI' }
  ];
}
