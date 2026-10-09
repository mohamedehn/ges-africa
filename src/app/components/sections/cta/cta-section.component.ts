import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnergyCanvasComponent } from '../../shared/energy-canvas/energy-canvas.component';
import { MagneticDirective, RevealDirective } from '../../../shared/directives/motion.directives';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule, EnergyCanvasComponent, RevealDirective, MagneticDirective],
  template: `
    <section class="bg-grain py-28 md:py-40 relative overflow-hidden text-white">
      <div class="absolute inset-0 hero-gradient"></div>
      <div class="absolute inset-0 bg-grid"></div>
      <app-energy-canvas [density]="0.7"></app-energy-canvas>
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-184 max-w-full h-184 bg-ges-green/15 rounded-full blur-[140px] animate-float-slow"></div>

      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div appReveal="scale" class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-ges-green mb-10">
          <i class="fas fa-rocket text-xs"></i>
          Prêt à lancer votre projet ?
        </div>

        <h2 appReveal="lines" class="font-display text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[1.02] mb-8">
          <span class="line"><span style="--d:0">Lancez votre étude</span></span>
          <span class="line"><span style="--d:1" class="gradient-text">dès maintenant</span></span>
        </h2>

        <p appReveal [revealDelay]="300" class="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
          Décrivez votre site, votre objectif — économies, conformité, décarbonation — et vos délais.
          Nous revenons avec un plan d'étude et les livrables attendus.
        </p>

        <div appReveal [revealDelay]="450" class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" appMagnetic
             class="btn-primary px-10 py-5 rounded-2xl font-semibold text-lg inline-flex items-center justify-center gap-3 group">
            Demander une étude gratuite
            <i class="fas fa-arrow-right text-sm transition-transform duration-300 group-hover:translate-x-1.5"></i>
          </a>
          <a href="mailto:direction@gesafrica.com" appMagnetic
             class="btn-outline px-10 py-5 rounded-2xl font-semibold text-lg inline-flex items-center justify-center gap-2">
            <i class="fas fa-envelope text-sm"></i>
            Nous écrire
          </a>
        </div>
      </div>
    </section>
  `
})
export class CtaSectionComponent { }
