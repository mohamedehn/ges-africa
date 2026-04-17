import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../shared/service-card/service-card.component';

interface Service {
  icon: string;
  title: string;
  description: string;
  details: string[];
}

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent],
  template: `
    <section id="services" class="py-24 bg-ges-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="section-divider mx-auto mb-6"></div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-ges-dark mb-5">
            Nos expertises
          </h2>
          <p class="text-lg text-ges-gray max-w-2xl mx-auto leading-relaxed">
            Nous concevons des projets énergétiques et digitaux comme des actifs durables — pour développeurs, industriels et institutions.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <app-service-card
            *ngFor="let service of services"
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
