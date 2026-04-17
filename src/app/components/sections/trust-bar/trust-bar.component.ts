import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TrustItem {
  icon: string;
  text: string;
  detail: string;
}

@Component({
  selector: 'app-trust-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative -mt-12 z-10">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div *ngFor="let item of trustItems" class="text-center group">
              <div class="w-14 h-14 bg-ges-green/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-ges-green/20 transition-colors">
                <i [class]="'fas ' + item.icon + ' text-ges-green text-xl'"></i>
              </div>
              <h3 class="text-sm font-bold text-ges-dark mb-1">{{ item.text }}</h3>
              <p class="text-xs text-ges-gray">{{ item.detail }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TrustBarComponent {
  trustItems: TrustItem[] = [
    { icon: 'fa-shield-alt', text: 'Indépendant', detail: 'Conseil objectif, orienté performance' },
    { icon: 'fa-file-code', text: 'Livrables exploitables', detail: 'Documents prêts pour l\'exécution' },
    { icon: 'fa-check-circle', text: 'Conformité garantie', detail: 'Normes locales et internationales' },
    { icon: 'fa-chart-line', text: 'Approche ROI', detail: 'Retour sur investissement démontré' }
  ];
}
