import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-linear-to-r from-ges-blue to-ges-dark text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold mb-6">
          Lancez votre étude — réponse rapide, cadrage clair
        </h2>
        <p class="text-xl text-gray-200 mb-8">
          Décrivez votre site, votre objectif (économies, conformité, décarbonation, continuité de service) et vos délais. Nous revenons vers vous avec un plan d'étude et les livrables.
        </p>
        <a href="#contact" class="inline-block bg-secondary text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition">
          Demander une étude
        </a>
      </div>
    </section>
  `
})
export class CtaSectionComponent {}
