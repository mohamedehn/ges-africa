import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { RevealDirective } from '../../../shared/directives/motion.directives';

interface Project {
  imageUrl: string;
  imageSmall?: string;
  fullWidth?: number;
  title: string;
  description: string;
  tags: string[];
  metric: string;
  metricLabel: string;
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, RevealDirective],
  template: `
    <section id="realisations" class="py-28 md:py-36 bg-ges-light relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-16 md:mb-20">
          <div class="lg:col-span-8">
            <div appReveal class="inline-flex items-center gap-3 text-ges-green text-xs font-semibold uppercase tracking-[0.25em] mb-6">
              <span class="w-10 h-px bg-ges-green"></span> Réalisations
            </div>
            <h2 appReveal="lines" class="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-ges-dark tracking-tight leading-[1.05]">
              <span class="line"><span style="--d:0">Typologies</span></span>
              <span class="line"><span style="--d:1" class="gradient-text">de missions</span></span>
            </h2>
          </div>
          <p appReveal [revealDelay]="250" class="lg:col-span-4 text-lg text-ges-gray leading-relaxed">
            Aperçu des projets types que nous réalisons pour nos clients à travers le continent.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 md:gap-8">
          <app-project-card
            *ngFor="let project of projects; let i = index"
            appReveal [revealDelay]="(i % 2) * 150"
            [class]="i % 2 ? 'md:mt-16' : ''"
            [imageUrl]="project.imageUrl"
            [imageSmall]="project.imageSmall"
            [fullWidth]="project.fullWidth ?? 3840"
            [title]="project.title"
            [description]="project.description"
            [tags]="project.tags"
            [metric]="project.metric"
            [metricLabel]="project.metricLabel">
          </app-project-card>
        </div>
      </div>
    </section>
  `
})
export class ProjectsSectionComponent {
  projects: Project[] = [
    {
      imageUrl: '/images/ombriere-pv.jpg',
      imageSmall: '/images/ombriere-pv-1400.jpg',
      title: 'PV toitures & ombrières',
      description: 'Centrales de 100 kWc à multi-MW — études complètes de la faisabilité à l\'exploitation.',
      tags: ['Faisabilité', 'Dimensionnement', 'ROI'],
      metric: 'multi-MW',
      metricLabel: 'Puissance'
    },
    {
      imageUrl: '/images/industrie-logistique.jpg',
      imageSmall: '/images/industrie-logistique-1400.jpg',
      title: 'Industrie & logistique',
      description: 'Autoconsommation solaire intégrée aux contraintes process industriels.',
      tags: ['Autoconsommation', 'Process', 'Optimisation'],
      metric: '30%',
      metricLabel: 'Économies'
    },
    {
      imageUrl: '/images/smart-building.jpg',
      imageSmall: '/images/smart-building-1400.jpg',
      fullWidth: 2880,
      title: 'Smart building tertiaire',
      description: 'GTB, confort thermique, pilotage intelligent et sobriété énergétique.',
      tags: ['GTB/GTC', 'BIM MEP', 'Confort'],
      metric: '40%',
      metricLabel: 'Gain énergie'
    },
    {
      imageUrl: '/images/irve-hub.jpg',
      imageSmall: '/images/irve-hub-1400.jpg',
      title: 'Infrastructure IRVE',
      description: 'Hubs de recharge AC/DC avec pilotage intelligent et intégration ENR.',
      tags: ['Smart charging', 'Intégration PV', 'Réseau'],
      metric: 'AC/DC',
      metricLabel: 'Technologie'
    }
  ];
}
