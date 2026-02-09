import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessStepComponent } from '../../shared/process-step/process-step.component';

interface Step {
  stepNumber: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-method-section',
  standalone: true,
  imports: [CommonModule, ProcessStepComponent],
  template: `
    <section id="methode" class="py-20 bg-ges-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-ges-dark mb-4">
            Notre méthode en 5 étapes
          </h2>
          <p class="text-xl text-gray-600">Une approche structurée pour des résultats mesurables</p>
        </div>

        <div class="grid md:grid-cols-5 gap-8">
          <app-process-step
            *ngFor="let step of steps"
            [stepNumber]="step.stepNumber"
            [title]="step.title"
            [description]="step.description">
          </app-process-step>
        </div>

        <div class="text-center mt-12">
          <a href="#methode" class="inline-block bg-ges-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition">
            Voir notre méthode en détail
          </a>
        </div>
      </div>
    </section>
  `
})
export class MethodSectionComponent {
  steps: Step[] = [
    {
      stepNumber: 1,
      title: 'Cadrage',
      description: 'Objectifs, contraintes, données disponibles, critères de décision'
    },
    {
      stepNumber: 2,
      title: 'Études',
      description: 'Modélisation, dimensionnement, productible, architecture systèmes'
    },
    {
      stepNumber: 3,
      title: 'Optimisation',
      description: 'CAPEX/OPEX, risques, phasage, maintenabilité, résilience'
    },
    {
      stepNumber: 4,
      title: 'Exécution',
      description: 'Dossiers prêts, CCTP/DPGF, coordination, support chantier'
    },
    {
      stepNumber: 5,
      title: 'Performance',
      description: 'Commissioning, GTB, suivi énergétique, amélioration continue'
    }
  ];
}
