import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="bg-white shadow-md fixed w-full top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <div class="flex items-center">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-ges-blue rounded-full flex items-center justify-center">
                <i class="fas fa-bolt text-ges-green text-xl"></i>
              </div>
              <div>
                <div class="text-2xl font-bold text-ges-blue">GES</div>
                <div class="text-xs font-semibold text-ges-green">AFRICA</div>
              </div>
            </div>
          </div>

          <!-- Menu Desktop -->
          <div class="hidden md:flex space-x-8">
            <a href="#" class="text-ges-dark hover:text-ges-green font-medium transition">Accueil</a>
            <a href="#expertises" class="text-ges-dark hover:text-ges-green font-medium transition">Expertises</a>
            <a href="#solutions" class="text-ges-dark hover:text-ges-green font-medium transition">Solutions</a>
            <a href="#secteurs" class="text-ges-dark hover:text-ges-green font-medium transition">Secteurs</a>
            <a href="#realisations" class="text-ges-dark hover:text-ges-green font-medium transition">Réalisations</a>
            <a href="#methode" class="text-ges-dark hover:text-ges-green font-medium transition">Méthode</a>
            <a href="#apropos" class="text-ges-dark hover:text-ges-green font-medium transition">À propos</a>
          </div>

          <!-- CTA -->
          <div class="hidden md:flex items-center space-x-4">
            <a href="#contact" class="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Demander une étude
            </a>
          </div>

          <!-- Mobile menu button -->
          <button class="md:hidden text-ges-dark">
            <i class="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
    </nav>
  `
})
export class NavigationComponent {}
