import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCardComponent } from '../../shared/feature-card/feature-card.component';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CommonModule, FeatureCardComponent],
  template: `
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-ges-dark mb-4">
            Pourquoi GES Africa
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <app-feature-card
            *ngFor="let feature of features"
            [icon]="feature.icon"
            [title]="feature.title"
            [description]="feature.description">
          </app-feature-card>
        </div>
      </div>
    </section>
  `
})
export class FeaturesSectionComponent {
  features: Feature[] = [
    {
      icon: 'fa-tachometer-alt',
      title: 'Décisions plus rapides',
      description: 'Scénarios comparés, hypothèses transparentes, KPI clairs'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Risque réduit',
      description: 'Coordination technique, conformité, logique d\'exécution chantier'
    },
    {
      icon: 'fa-chart-bar',
      title: 'Performance prouvable',
      description: 'Métriques (kWh, économies, productible), plan de M&V'
    },
    {
      icon: 'fa-tools',
      title: 'Exploitabilité',
      description: 'DOE numérique, paramétrage GTB, documents d\'exploitation'
    }
  ];
}
