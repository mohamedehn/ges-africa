import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessStepComponent } from '../../shared/process-step/process-step.component';
import { RevealDirective, ScrollProgressDirective } from '../../../shared/directives/motion.directives';

interface Step {
  stepNumber: number;
  title: string;
  description: string;
  icon: string;
  duration?: string;
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
            <span class="line"><span style="--d:1" class="gradient-text">{{ mode === 'digital' ? '4 étapes' : '5 étapes' }}</span></span>
          </h2>
          <!-- Les deux textes occupent la même cellule : la hauteur ne bouge pas au changement d'onglet -->
          <div appReveal [revealDelay]="250" class="grid max-w-2xl mx-auto mb-10 text-lg text-white/60">
            <p *ngFor="let t of intros" class="col-start-1 row-start-1 transition-opacity duration-300"
               [class]="t.id === mode ? 'opacity-100' : 'opacity-0 invisible'" [attr.aria-hidden]="t.id !== mode">{{ t.text }}</p>
          </div>
          <div appReveal [revealDelay]="350" class="inline-flex p-1 rounded-2xl glass" role="tablist">
            <button type="button" role="tab" [attr.aria-selected]="mode === 'ingenierie'" (click)="mode = 'ingenierie'"
                    class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
                    [class]="mode === 'ingenierie' ? 'bg-ges-green text-ges-dark' : 'text-white/70 hover:text-white'">
              Projets d'ingénierie
            </button>
            <button type="button" role="tab" [attr.aria-selected]="mode === 'digital'" (click)="mode = 'digital'"
                    class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
                    [class]="mode === 'digital' ? 'bg-ges-green text-ges-dark' : 'text-white/70 hover:text-white'">
              Jumeau numérique
            </button>
          </div>
        </div>

        <!-- Les deux timelines sont superposées : seul le contenu change, la page ne saute pas -->
        <div class="grid">
          <div *ngFor="let t of timelines" appScrollProgress
               class="col-start-1 row-start-1 relative grid grid-cols-1 gap-12 lg:gap-6 transition-opacity duration-300"
               [class]="(t.id === 'digital' ? 'lg:grid-cols-4 ' : 'lg:grid-cols-5 ') + (t.id === mode ? 'opacity-100' : 'opacity-0 invisible pointer-events-none')"
               [attr.aria-hidden]="t.id !== mode">
            <div class="absolute left-8 top-8 bottom-8 w-px bg-white/10 lg:top-8 lg:bottom-auto lg:h-px lg:w-auto"
                 [class]="t.id === 'digital' ? 'lg:left-[12.5%] lg:right-[12.5%]' : 'lg:left-[10%] lg:right-[10%]'">
              <div class="tl-fill absolute inset-0"></div>
            </div>
            <app-process-step
              *ngFor="let step of t.steps; let i = index"
              [style.--i]="i"
              [stepNumber]="step.stepNumber"
              [title]="step.title"
              [description]="step.description"
              [icon]="step.icon"
              [duration]="step.duration"
              [darkMode]="true">
            </app-process-step>
          </div>
        </div>
      </div>
    </section>
  `
})
export class MethodSectionComponent {
  mode: 'ingenierie' | 'digital' = 'ingenierie';

  intros = [
    { id: 'ingenierie', text: 'Une approche structurée et éprouvée pour des résultats mesurables à chaque phase du projet.' },
    { id: 'digital', text: 'Un site pilote d\'abord : des gains mesurés avant tout déploiement.' }
  ];

  get timelines() {
    return [
      { id: 'ingenierie', steps: this.steps },
      { id: 'digital', steps: this.digitalSteps }
    ];
  }

  digitalSteps: Step[] = [
    { stepNumber: 1, title: 'Audit et cadrage', description: 'Visite des magasins, cartographie des flux et des outils, objectifs chiffrés', icon: 'fa-search' },
    { stepNumber: 2, title: 'Pilote sur un site', description: 'Jumeau d\'un magasin, connexion ERP, premiers tableaux de bord', icon: 'fa-cube' },
    { stepNumber: 3, title: 'Déploiement', description: 'Extension aux autres sites, formation des équipes, intégrations', icon: 'fa-network-wired' },
    { stepNumber: 4, title: 'Exploitation', description: 'Support, maintenance évolutive, abonnement ou licence', icon: 'fa-sync-alt' }
  ];

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
