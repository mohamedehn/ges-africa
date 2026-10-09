import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 relative overflow-hidden">
      <!-- Background gradient -->
      <div class="absolute inset-0 hero-gradient"></div>
      <div class="absolute inset-0">
        <div class="absolute top-0 left-1/4 w-64 h-64 bg-ges-green/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-48 h-48 bg-ges-green/8 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-ges-green mb-8">
          <i class="fas fa-rocket text-xs"></i>
          Prêt à lancer votre projet ?
        </div>

        <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
          Lancez votre étude<br>
          <span class="gradient-text">dès maintenant</span>
        </h2>

        <p class="text-lg text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          Décrivez votre site, votre objectif — économies, conformité, décarbonation — et vos délais.
          Nous revenons avec un plan d'étude et les livrables attendus.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" class="btn-primary px-10 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center gap-2">
            Demander une étude gratuite
            <i class="fas fa-arrow-right text-sm"></i>
          </a>
          <a href="mailto:direction@gesafrica.com" class="btn-outline px-10 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center gap-2">
            <i class="fas fa-envelope text-sm"></i>
            Nous écrire
          </a>
        </div>
      </div>
    </section>
  `
})
export class CtaSectionComponent { }
