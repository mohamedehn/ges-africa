import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessStepComponent } from '../../shared/process-step/process-step.component';
import { RevealDirective, ScrollProgressDirective } from '../../../shared/directives/motion.directives';

interface Step {
  stepNumber: number;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-method-section',
  standalone: true,
  imports: [CommonModule, ProcessStepComponent, RevealDirective, ScrollProgressDirective],
  template: `
    <section id="methode" class="py-28 md:py-36 bg-ges-navy text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-grid opacity-60"></div>
      <div class="absolute top-0 right-0 w-104 h-104 bg-ges-green/10 rounded-full blur-[120px] animate-float-slow"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-ges-dark rounded-full blur-[100px]"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20 md:mb-28">
          <div appReveal class="inline-flex items-center gap-3 text-ges-green text-xs font-semibold uppercase tracking-[0.25em] mb-6">
            <span class="w-10 h-px bg-ges-green"></span> Méthode <span class="w-10 h-px bg-ges-green"></span>
          </div>
          <h2 appReveal="lines" class="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            <span class="line"><span style="--d:0">Notre méthode en</span></span>
            <span class="line"><span style="--d:1" class="gradient-text">5 étapes</span></span>
          </h2>
          <p appReveal [revealDelay]="250" class="text-lg text-white/60 max-w-2xl mx-auto">
            Une approche structurée et éprouvée pour des résultats mesurables à chaque phase du projet.
          </p>
        </div>

        <!-- Timeline : la ligne se remplit au scroll -->
        <div appScrollProgress class="relative grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6">
          <div class="absolute left-8 top-8 bottom-8 w-px bg-white/10 lg:left-[10%] lg:right-[10%] lg:top-8 lg:bottom-auto lg:h-px lg:w-auto">
            <div class="tl-fill absolute inset-0"></div>
          </div>
          <app-process-step
            *ngFor="let step of steps; let i = index"
            [style.--i]="i"
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
