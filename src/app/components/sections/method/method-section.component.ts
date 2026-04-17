import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessStepComponent } from '../../shared/process-step/process-step.component';

interface Step {
  stepNumber: number;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-method-section',
  standalone: true,
  imports: [CommonModule, ProcessStepComponent],
  template: `
    <section id="methode" class="py-24 bg-ges-dark text-white relative overflow-hidden">
      <!-- Decorative -->
      <div class="absolute top-0 right-0 w-80 h-80 bg-ges-green/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-ges-green/3 rounded-full blur-3xl"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="section-divider mx-auto mb-6"></div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5">
            Notre méthode en <span class="gradient-text">5 étapes</span>
          </h2>
          <p class="text-lg text-white/60 max-w-2xl mx-auto">
            Une approche structurée et éprouvée pour des résultats mesurables à chaque phase du projet.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <app-process-step
            *ngFor="let step of steps"
            [stepNumber]="step.stepNumber"
            [title]="step.title"
            [description]="step.description"
            [icon]="step.icon"
            [darkMode]="true">
          </app-process-step>
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
      description: 'Objectifs, contraintes, données, critères de décision',
      icon: 'fa-crosshairs'
    },
    {
      stepNumber: 2,
      title: 'Études',
      description: 'Modélisation, dimensionnement, productible, architecture',
      icon: 'fa-drafting-compass'
    },
    {
      stepNumber: 3,
      title: 'Optimisation',
      description: 'CAPEX/OPEX, risques, phasage, résilience',
      icon: 'fa-sliders-h'
    },
    {
      stepNumber: 4,
      title: 'Exécution',
      description: 'CCTP/DPGF, coordination, support chantier',
      icon: 'fa-hard-hat'
    },
    {
      stepNumber: 5,
      title: 'Performance',
      description: 'Commissioning, GTB, suivi, amélioration continue',
      icon: 'fa-chart-line'
    }
  ];
}
