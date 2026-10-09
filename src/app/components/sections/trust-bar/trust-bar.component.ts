import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective, SpotlightDirective } from '../../../shared/directives/motion.directives';

interface TrustItem {
  icon: string;
  text: string;
  detail: string;
}

@Component({
  selector: 'app-trust-bar',
  standalone: true,
  imports: [CommonModule, RevealDirective, SpotlightDirective],
  template: `
    <section class="relative bg-ges-dark text-white">
      <!-- Bandeau défilant des expertises -->
      <div class="border-y border-white/10 bg-ges-navy/40 py-5 overflow-hidden">
        <div class="marquee">
          <div *ngFor="let _ of [0, 1]" class="marquee-track" aria-hidden="true">
            <div *ngFor="let e of expertises" class="flex items-center gap-3 whitespace-nowrap">
              <span class="w-9 h-9 rounded-lg bg-ges-green/15 flex items-center justify-center">
                <i [class]="'fas ' + e.icon + ' text-ges-green text-sm'"></i>
              </span>
              <span class="text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-white/75">{{ e.label }}</span>
              <span class="ml-6 w-1.5 h-1.5 rounded-full bg-ges-green/60"></span>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          <div *ngFor="let item of trustItems; let i = index"
               appReveal [revealDelay]="i * 100">
            <div appSpotlight class="glass rounded-2xl p-6 md:p-7 h-full text-center group transition-colors duration-500 hover:border-ges-green/40">
              <div class="w-14 h-14 bg-ges-green/10 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-ges-green group-hover:rotate-6 transition-all duration-500">
                <i [class]="'fas ' + item.icon + ' text-ges-green text-xl group-hover:text-ges-dark transition-colors duration-500'"></i>
              </div>
              <h3 class="font-display text-base md:text-lg font-bold text-white mb-1.5">{{ item.text }}</h3>
              <p class="text-xs md:text-sm text-white/50 leading-relaxed">{{ item.detail }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TrustBarComponent {
  expertises = [
    { icon: 'fa-solar-panel', label: 'Photovoltaïque & Stockage' },
    { icon: 'fa-cube', label: 'BIM MEP' },
    { icon: 'fa-building', label: 'GTB / GTC' },
    { icon: 'fa-bolt', label: 'CFO / CFA' },
    { icon: 'fa-charging-station', label: 'IRVE' },
    { icon: 'fa-leaf', label: 'Audit & Conseil Énergie' }
  ];

  trustItems: TrustItem[] = [
    { icon: 'fa-shield-alt', text: 'Indépendant', detail: 'Conseil objectif, orienté performance' },
    { icon: 'fa-file-code', text: 'Livrables exploitables', detail: 'Documents prêts pour l\'exécution' },
    { icon: 'fa-check-circle', text: 'Conformité garantie', detail: 'Normes locales et internationales' },
    { icon: 'fa-chart-line', text: 'Approche ROI', detail: 'Retour sur investissement démontré' }
  ];
}
