import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../shared/service-card/service-card.component';
import { RevealDirective } from '../../../shared/directives/motion.directives';

interface Service {
  icon: string;
  title: string;
  description: string;
  details: string[];
}

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent, RevealDirective],
  template: `
    <section id="services" class="py-28 md:py-36 bg-ges-dark text-white relative overflow-hidden">
      <div class="absolute top-1/3 -left-40 w-lg h-128 bg-ges-green/10 rounded-full blur-[130px] animate-float-slow"></div>
      <div class="absolute bottom-0 -right-40 w-md h-112 bg-ges-blue/50 rounded-full blur-[130px] animate-float-slow-rev"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-16 md:mb-20">
          <div class="lg:col-span-7">
            <div appReveal class="inline-flex items-center gap-3 text-ges-green text-xs font-semibold uppercase tracking-[0.25em] mb-6">
              <span class="w-10 h-px bg-ges-green"></span> Expertises
            </div>
            <h2 appReveal="lines" class="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              <span class="line"><span style="--d:0">Nos</span></span>
              <span class="line"><span style="--d:1" class="gradient-text">expertises</span></span>
            </h2>
          </div>
          <p appReveal [revealDelay]="250" class="lg:col-span-5 text-lg text-white/60 leading-relaxed">
            Nous concevons des projets énergétiques et digitaux comme des actifs durables — pour développeurs, industriels et institutions.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          <app-service-card
            *ngFor="let service of services; let i = index"
            appReveal [revealDelay]="(i % 3) * 120"
            [class]="spans[i]"
            [index]="i + 1"
            [icon]="service.icon"
            [title]="service.title"
            [description]="service.description"
            [details]="service.details">
          </app-service-card>
        </div>
      </div>
    </section>
  `
})
export class ServicesSectionComponent {
  /** Disposition bento : certaines cartes occupent 2 colonnes sur grand écran */
  spans = [
    'lg:col-span-2', '', '',
    'lg:col-span-2', '', 'lg:col-span-2'
  ];

  services: Service[] = [
    {
      icon: 'fa-solar-panel',
      title: 'Photovoltaïque & Stockage',
      description: 'De la faisabilité à l\'exploitation, études complètes pour centrales solaires.',
      details: ['Faisabilité & productible', 'Dimensionnement optimisé', 'Suivi de performance']
    },
    {
      icon: 'fa-cube',
      title: 'BIM MEP',
      description: 'Conception coordonnée multi-lots pour réduire les risques chantier.',
      details: ['Modélisation 3D', 'Détection de clashs', 'Synthèse technique']
    },
    {
      icon: 'fa-building',
      title: 'GTB / GTC',
      description: 'Pilotage énergétique intelligent pour le confort et la performance.',
      details: ['Architecture systèmes', 'Programmation & mise en service', 'Supervision énergie']
    },
    {
      icon: 'fa-bolt',
      title: 'CFO / CFA',
      description: 'Études électriques complètes — courants forts et courants faibles.',
      details: ['Notes de calcul', 'Plans d\'exécution', 'Coordination SSI']
    },
    {
      icon: 'fa-charging-station',
      title: 'IRVE',
      description: 'Solutions de recharge intelligentes intégrées aux ENR.',
      details: ['Dimensionnement', 'Smart charging', 'Intégration PV']
    },
    {
      icon: 'fa-leaf',
      title: 'Audit & Conseil Énergie',
      description: 'Stratégie de décarbonation et optimisation des consommations.',
      details: ['Audit énergétique', 'Plan de sobriété', 'Trajectoire bas-carbone']
    }
  ];
}
