import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';

interface Project {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  metric: string;
  metricLabel: string;
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  template: `
    <section id="realisations" class="py-24 bg-ges-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="section-divider mx-auto mb-6"></div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-ges-dark mb-5">
            Typologies de missions
          </h2>
          <p class="text-lg text-ges-gray max-w-2xl mx-auto">
            Aperçu des projets types que nous réalisons pour nos clients à travers le continent.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 gap-8">
          <app-project-card
            *ngFor="let project of projects"
            [imageUrl]="project.imageUrl"
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
      imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
      title: 'PV toitures & ombrières',
      description: 'Centrales de 100 kWc à multi-MW — études complètes de la faisabilité à l\'exploitation.',
      tags: ['Faisabilité', 'Dimensionnement', 'ROI'],
      metric: 'multi-MW',
      metricLabel: 'Puissance'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80',
      title: 'Industrie & logistique',
      description: 'Autoconsommation solaire intégrée aux contraintes process industriels.',
      tags: ['Autoconsommation', 'Process', 'Optimisation'],
      metric: '30%',
      metricLabel: 'Économies'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      title: 'Smart building tertiaire',
      description: 'GTB, confort thermique, pilotage intelligent et sobriété énergétique.',
      tags: ['GTB/GTC', 'BIM MEP', 'Confort'],
      metric: '40%',
      metricLabel: 'Gain énergie'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
      title: 'Infrastructure IRVE',
      description: 'Hubs de recharge AC/DC avec pilotage intelligent et intégration ENR.',
      tags: ['Smart charging', 'Intégration PV', 'Réseau'],
      metric: 'AC/DC',
      metricLabel: 'Technologie'
    }
  ];
}
