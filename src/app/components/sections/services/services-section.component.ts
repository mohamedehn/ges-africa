import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../shared/service-card/service-card.component';

interface Service {
  icon: string;
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent],
  template: `
    <section id="services" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-ges-dark mb-4">
            Des projets énergétiques et digitaux conçus comme des actifs
          </h2>
          <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Nous accompagnons développeurs, industriels, gestionnaires d'actifs et institutions dans la conception et l'optimisation de solutions énergétiques et smart building.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <app-service-card
            *ngFor="let service of services"
            [icon]="service.icon"
            [title]="service.title"
            [description]="service.description"
            [imageUrl]="service.imageUrl">
          </app-service-card>
        </div>

        <!-- <div class="text-center">
          <a href="#expertises" class="inline-block bg-ges-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition">
            Découvrir nos expertises
          </a>
        </div> -->
      </div>
    </section>
  `
})
export class ServicesSectionComponent {
  services: Service[] = [
    {
      icon: 'fa-solar-panel',
      title: 'Photovoltaïque & stockage',
      description: 'Faisabilité → exécution → performance',
      imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80'
    },
    {
      icon: 'fa-cube',
      title: 'BIM MEP',
      description: 'Conception coordonnée, réduction des risques chantier',
      imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80'
    },
    {
      icon: 'fa-building',
      title: 'GTB/GTC',
      description: 'Pilotage énergétique, confort, continuité de service',
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80'
    },
    {
      icon: 'fa-bolt',
      title: 'CFO/CFA',
      description: 'Études électriques complètes, sécurité et évolutivité',
      imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80'
    },
    {
      icon: 'fa-charging-station',
      title: 'IRVE',
      description: 'Dimensionnement, smart charging, intégration ENR',
      imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80'
    }
  ];
}
