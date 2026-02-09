import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero-gradient pt-32 pb-20 mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="text-white">
            <h1 class="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Accélérateur de la transition énergétique intelligente en Afrique
            </h1>
            <p class="text-xl text-gray-200 mb-8">
              Ingénierie premium ENR, BIM et Smart Building — de la stratégie à l'exploitation, avec des livrables fiables, conformes et orientés performance.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="#contact" class="bg-secondary text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-opacity-90 transition">
                Demander une étude
              </a>
              <a href="#contact" class="bg-white text-ges-blue px-8 py-4 rounded-lg font-semibold text-center hover:bg-gray-100 transition">
                Parler à un expert
              </a>
            </div>
            <div class="mt-6">
              <a href="#" class="text-white text-sm hover:text-ges-green transition flex items-center">
                <i class="fas fa-download mr-2"></i>
                Télécharger la fiche société (PDF)
              </a>
            </div>
          </div>

          <div class="hidden md:block">
            <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800" alt="Solar panels" class="rounded-2xl shadow-2xl">
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}
