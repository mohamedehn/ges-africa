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
    <section id="features" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Left: text block -->
          <div>
            <div class="section-divider mb-6"></div>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-ges-dark mb-6 leading-tight">
              Pourquoi choisir
              <span class="gradient-text">GES Africa</span> ?
            </h2>
            <p class="text-lg text-ges-gray leading-relaxed mb-8">
              Nous combinons expertise technique de pointe, connaissance du terrain africain et standards internationaux pour délivrer des projets qui performent réellement.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-ges-green/10 rounded-lg flex items-center justify-center shrink-0">
                  <i class="fas fa-globe-africa text-ges-green text-sm"></i>
                </div>
                <span class="text-sm font-medium text-ges-dark">Présence multi-continents</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-ges-green/10 rounded-lg flex items-center justify-center shrink-0">
                  <i class="fas fa-handshake text-ges-green text-sm"></i>
                </div>
                <span class="text-sm font-medium text-ges-dark">Partenariats stratégiques</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-ges-green/10 rounded-lg flex items-center justify-center shrink-0">
                  <i class="fas fa-award text-ges-green text-sm"></i>
                </div>
                <span class="text-sm font-medium text-ges-dark">Équipe certifiée</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-ges-green/10 rounded-lg flex items-center justify-center shrink-0">
                  <i class="fas fa-cogs text-ges-green text-sm"></i>
                </div>
                <span class="text-sm font-medium text-ges-dark">Outils dernière génération</span>
              </div>
            </div>
          </div>

          <!-- Right: feature cards grid -->
          <div class="grid sm:grid-cols-2 gap-4">
            <app-feature-card
              *ngFor="let feature of features"
              [icon]="feature.icon"
              [title]="feature.title"
              [description]="feature.description">
            </app-feature-card>
          </div>
        </div>
      </div>
    </section>
  `
})
export class FeaturesSectionComponent {
  features: Feature[] = [
    {
      icon: 'fa-tachometer-alt',
      title: 'Décisions rapides',
      description: 'Scénarios comparés, hypothèses transparentes et KPI clairs pour décider vite.'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Risque maîtrisé',
      description: 'Coordination technique, conformité normative et logique d\'exécution chantier.'
    },
    {
      icon: 'fa-chart-bar',
      title: 'Performance prouvable',
      description: 'Métriques (kWh, économies, productible) et plan de Mesure & Vérification.'
    },
    {
      icon: 'fa-tools',
      title: 'Exploitabilité totale',
      description: 'DOE numérique, paramétrage GTB et documents d\'exploitation complets.'
    }
  ];
}
