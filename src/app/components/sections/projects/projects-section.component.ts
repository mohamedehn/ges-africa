import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';

interface Project {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  template: `
    <section id="realisations" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-ges-dark mb-4">
            Quelques typologies de missions
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <app-project-card
            *ngFor="let project of projects"
            [imageUrl]="project.imageUrl"
            [title]="project.title"
            [description]="project.description"
            [tags]="project.tags">
          </app-project-card>
        </div>

        <div class="text-center mt-12">
          <a href="#realisations" class="inline-block bg-ges-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition">
            Voir nos réalisations
          </a>
        </div>
      </div>
    </section>
  `
})
export class ProjectsSectionComponent {
  projects: Project[] = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600',
      title: 'PV toitures & ombrières',
      description: '100 kWc à multi-MW - Études complètes et exécution',
      tags: ['Faisabilité', 'Dimensionnement', 'ROI']
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600',
      title: 'Industrie & logistique',
      description: 'Autoconsommation, contraintes process',
      tags: ['Autoconsommation', 'Optimisation']
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600',
      title: 'Smart building tertiaire',
      description: 'GTB, confort, pilotage, sobriété',
      tags: ['GTB/GTC', 'BIM']
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600',
      title: 'IRVE',
      description: 'Hubs AC/DC, contraintes réseau, pilotage intelligent',
      tags: ['Smart charging', 'Intégration ENR']
    }
  ];
}
