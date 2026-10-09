import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCardComponent } from '../../shared/feature-card/feature-card.component';
import { RevealDirective } from '../../../shared/directives/motion.directives';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CommonModule, FeatureCardComponent, RevealDirective],
  template: `
    <section id="features" class="py-28 md:py-36 bg-ges-light relative overflow-hidden">
      <div class="absolute -top-24 right-0 w-md h-112 bg-ges-green/10 rounded-full blur-[110px]"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-14 items-start">
          <!-- Left: text block (sticky) -->
          <div class="lg:col-span-5 lg:sticky lg:top-32">
            <div appReveal class="inline-flex items-center gap-3 text-ges-green text-xs font-semibold uppercase tracking-[0.25em] mb-6">
              <span class="w-10 h-px bg-ges-green"></span> Pourquoi nous
            </div>
            <h2 appReveal="lines" class="font-display text-4xl md:text-6xl font-bold text-ges-dark mb-8 leading-[1.05] tracking-tight">
              <span class="line"><span style="--d:0">Pourquoi choisir</span></span>
              <span class="line"><span style="--d:1" class="gradient-text">GES Africa</span> <span style="--d:1">?</span></span>
            </h2>
            <p appReveal [revealDelay]="200" class="text-lg text-ges-gray leading-relaxed mb-10">
              Nous combinons expertise technique de pointe, connaissance du terrain africain et standards internationaux pour délivrer des projets qui performent réellement.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div *ngFor="let p of pillars; let i = index" appReveal [revealDelay]="300 + i * 90"
                   class="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 border border-gray-100 hover:border-ges-green/40 hover:shadow-lg transition-all duration-300">
                <div class="w-9 h-9 bg-ges-green/10 rounded-xl flex items-center justify-center shrink-0">
                  <i [class]="'fas ' + p.icon + ' text-ges-green text-sm'"></i>
                </div>
                <span class="text-sm font-semibold text-ges-dark">{{ p.label }}</span>
              </div>
            </div>
          </div>

          <!-- Right: feature cards grid -->
          <div class="lg:col-span-7 grid sm:grid-cols-2 gap-4 md:gap-5">
            <app-feature-card
              *ngFor="let feature of features; let i = index"
              appReveal [revealDelay]="(i % 2) * 120"
              [class]="i % 2 ? 'sm:mt-12' : ''"
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
  pillars = [
    { icon: 'fa-globe-africa', label: 'Présence multi-continents' },
    { icon: 'fa-handshake', label: 'Partenariats stratégiques' },
    { icon: 'fa-award', label: 'Équipe certifiée' },
    { icon: 'fa-cogs', label: 'Outils dernière génération' }
  ];

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
