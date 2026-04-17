import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../../shared/logo/logo.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  template: `
    <nav class="fixed w-full top-0 z-50 transition-all duration-300"
         [class]="scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <div class="flex items-center">
            <app-logo size="medium"></app-logo>
          </div>

          <!-- Menu Desktop -->
          <div class="hidden lg:flex items-center space-x-1">
            <a *ngFor="let link of navLinks"
               [href]="link.href"
               class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
               [class]="scrolled ? 'text-ges-dark hover:text-ges-green hover:bg-ges-light' : 'text-white/90 hover:text-white hover:bg-white/10'">
              {{ link.label }}
            </a>
          </div>

          <!-- CTA Desktop -->
          <div class="hidden lg:flex items-center space-x-3">
            <a href="#contact"
               class="btn-primary px-6 py-2.5 rounded-lg font-semibold text-sm inline-flex items-center gap-2">
              <i class="fas fa-paper-plane text-xs"></i>
              Demander une étude
            </a>
          </div>

          <!-- Mobile menu button -->
          <button (click)="toggleMenu()" class="lg:hidden p-2 rounded-lg transition-colors"
                  [class]="scrolled ? 'text-ges-dark hover:bg-ges-light' : 'text-white hover:bg-white/10'">
            <i [class]="mobileMenuOpen ? 'fas fa-times text-xl' : 'fas fa-bars text-xl'"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div *ngIf="mobileMenuOpen"
           class="lg:hidden bg-white border-t border-gray-100 shadow-xl animate-fade-in-up">
        <div class="px-4 py-6 space-y-1">
          <a *ngFor="let link of navLinks"
             [href]="link.href"
             (click)="mobileMenuOpen = false"
             class="block px-4 py-3 rounded-lg text-ges-dark hover:bg-ges-light hover:text-ges-green font-medium transition-colors">
            {{ link.label }}
          </a>
          <div class="pt-4 border-t border-gray-100">
            <a href="#contact"
               (click)="mobileMenuOpen = false"
               class="block w-full text-center btn-primary px-6 py-3 rounded-lg font-semibold">
              Demander une étude
            </a>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class NavigationComponent {
  mobileMenuOpen = false;
  scrolled = false;

  navLinks = [
    { href: '#', label: 'Accueil' },
    { href: '#services', label: 'Expertises' },
    { href: '#features', label: 'Pourquoi nous' },
    { href: '#methode', label: 'Méthode' },
    { href: '#realisations', label: 'Réalisations' },
    { href: '#contact', label: 'Contact' }
  ];

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.scrolled = window.scrollY > 50;
      });
    }
  }

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
