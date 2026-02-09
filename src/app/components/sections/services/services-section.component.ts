import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../shared/service-card/service-card.component';

interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent],
  template: `
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-ges-dark mb-4">
            Des projets énergétiques et digitaux conçus comme des actifs
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous accompagnons développeurs, industriels, gestionnaires d'actifs et institutions dans la conception et l'optimisation de solutions énergétiques et smart building.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <app-service-card
            *ngFor="let service of services"
            [icon]="service.icon"
            [title]="service.title"
            [description]="service.description">
          </app-service-card>
        </div>

        <div class="text-center">
          <a href="#expertises" class="inline-block bg-ges-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition">
            Découvrir nos expertises
          </a>
        </div>
      </div>
    </section>
  `
})
export class ServicesSectionComponent {
  services: Service[] = [
    {
      icon: 'fa-solar-panel',
      title: 'Photovoltaïque & stockage',
      description: 'Faisabilité → exécution → performance'
    },
    {
      icon: 'fa-cube',
      title: 'BIM MEP',
      description: 'Conception coordonnée, réduction des risques chantier'
    },
    {
      icon: 'fa-building',
      title: 'GTB/GTC',
      description: 'Pilotage énergétique, confort, continuité de service'
    },
    {
      icon: 'fa-bolt',
      title: 'CFO/CFA',
      description: 'Études électriques complètes, sécurité et évolutivité'
    },
    {
      icon: 'fa-charging-station',
      title: 'IRVE',
      description: 'Dimensionnement, smart charging, intégration ENR'
    }
  ];
}
