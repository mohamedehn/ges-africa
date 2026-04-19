import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative min-h-screen flex items-center overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 hero-gradient"></div>

      <!-- Decorative elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-20 right-10 w-72 h-72 bg-ges-green/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-10 w-96 h-96 bg-ges-green/3 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 right-1/4 w-2 h-2 bg-ges-green/40 rounded-full"></div>
        <div class="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Texte -->
          <div class="text-white animate-fade-in-up">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-ges-green mb-8">
              <span class="w-2 h-2 bg-ges-green rounded-full animate-pulse"></span>
              Bureau d'études premium — Afrique &middot; Europe &middot; MENA
            </div>

            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
              Accélérateur de la
              <span class="gradient-text"> transition énergétique</span>
              intelligente
            </h1>

            <p class="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
              Ingénierie ENR, BIM et Smart Building — de la stratégie à l'exploitation.
              Des livrables fiables, conformes et orientés performance.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#contact"
                 class="btn-primary px-8 py-4 rounded-xl font-semibold text-center text-lg inline-flex items-center justify-center gap-2">
                Demander une étude
                <i class="fas fa-arrow-right text-sm"></i>
              </a>
              <a href="#services"
                 class="btn-outline px-8 py-4 rounded-xl font-semibold text-center text-lg inline-flex items-center justify-center gap-2">
                Découvrir nos expertises
              </a>
            </div>

            <div class="flex items-center gap-8 pt-4 border-t border-white/10">
              <div>
                <div class="text-2xl font-bold text-white">5+</div>
                <div class="text-xs text-white/50 uppercase tracking-wider">Expertises</div>
              </div>
              <div class="w-px h-10 bg-white/10"></div>
              <div>
                <div class="text-2xl font-bold text-white">3</div>
                <div class="text-xs text-white/50 uppercase tracking-wider">Continents</div>
              </div>
              <div class="w-px h-10 bg-white/10"></div>
              <div>
                <div class="text-2xl font-bold text-ges-green">100%</div>
                <div class="text-xs text-white/50 uppercase tracking-wider">Indépendant</div>
              </div>
            </div>
          </div>

          <!-- Image -->
          <div class="hidden lg:block">
            <div class="relative">
              <div class="absolute -inset-4 bg-ges-green/10 rounded-3xl blur-2xl"></div>
              <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
                   alt="Panneaux solaires en Afrique"
                   class="relative rounded-2xl shadow-2xl w-full object-cover aspect-4/3">
              <!-- Floating card -->
              <div class="absolute -bottom-6 -left-6 glass rounded-xl p-4 text-white">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-ges-green/20 rounded-lg flex items-center justify-center">
                    <i class="fas fa-bolt text-ges-green"></i>
                  </div>
                  <div>
                    <div class="text-sm font-bold">Performance prouvable</div>
                    <div class="text-xs text-white/60">kWh, ROI, M&V</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <i class="fas fa-chevron-down"></i>
      </div>
    </section>
  `
})
export class HeroComponent { }