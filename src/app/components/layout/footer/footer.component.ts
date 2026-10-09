import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../shared/logo/logo.component';
import { RevealDirective } from '../../../shared/directives/motion.directives';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LogoComponent, RouterLink, RevealDirective],
  template: `
    <footer class="bg-[#141B27] text-white">
      <!-- Green accent separator -->
      <div class="h-1 bg-linear-to-r from-ges-green via-ges-green/60 to-transparent"></div>
      <!-- Main footer -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <!-- Brand -->
          <div class="lg:col-span-1">
            <div class="mb-5">
              <app-logo size="small" theme="dark"></app-logo>
            </div>
            <p class="text-white/50 text-sm leading-relaxed mb-6">
              Bureau d'études premium spécialisé en ingénierie ENR, BIM et Smart Building à travers l'Afrique, l'Europe et le MENA.
            </p>
            <div class="flex gap-3">
              <a href="#" class="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:bg-ges-green hover:text-white transition-all text-sm">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <!-- Expertises -->
          <div>
            <h3 class="text-sm font-bold uppercase tracking-wider mb-5 text-white/80">Expertises</h3>
            <ul class="space-y-3">
              <li><a href="#services" class="text-sm text-white/50 hover:text-ges-green transition">Photovoltaïque & stockage</a></li>
              <li><a href="#services" class="text-sm text-white/50 hover:text-ges-green transition">BIM MEP</a></li>
              <li><a href="#services" class="text-sm text-white/50 hover:text-ges-green transition">GTB / GTC</a></li>
              <li><a href="#services" class="text-sm text-white/50 hover:text-ges-green transition">CFO / CFA</a></li>
              <li><a href="#services" class="text-sm text-white/50 hover:text-ges-green transition">IRVE</a></li>
              <li><a href="#services" class="text-sm text-white/50 hover:text-ges-green transition">Audit & Conseil Énergie</a></li>
            </ul>
          </div>

          <!-- Entreprise -->
          <div>
            <h3 class="text-sm font-bold uppercase tracking-wider mb-5 text-white/80">L'entreprise</h3>
            <ul class="space-y-3">
              <li><a href="#features" class="text-sm text-white/50 hover:text-ges-green transition">Pourquoi nous</a></li>
              <li><a href="#methode" class="text-sm text-white/50 hover:text-ges-green transition">Notre méthode</a></li>
              <li><a href="#realisations" class="text-sm text-white/50 hover:text-ges-green transition">Réalisations</a></li>
              <li><a href="#contact" class="text-sm text-white/50 hover:text-ges-green transition">Contact</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="text-sm font-bold uppercase tracking-wider mb-5 text-white/80">Contact</h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <div class="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <i class="fas fa-envelope text-ges-green text-xs"></i>
                </div>
                <div>
                  <p class="text-sm text-white/50">direction&#64;gesafrica.com</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <i class="fas fa-map-marker-alt text-ges-green text-xs"></i>
                </div>
                <div>
                  <p class="text-sm text-white/50">Afrique &middot; Europe &middot; MENA</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Signature : logo en grand sur fond de soleil levant -->
      <div class="relative overflow-hidden pt-6 pb-16 flex justify-center select-none" aria-hidden="true">
        <div class="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-176 max-w-[140%] h-176 rounded-full"
             style="background: radial-gradient(circle, rgba(122,193,67,.28) 0%, rgba(122,193,67,.08) 35%, transparent 65%)"></div>
        <div appReveal="scale" class="relative scale-150 sm:scale-[2] origin-center opacity-90 my-8 sm:my-12">
          <app-logo size="large" theme="dark"></app-logo>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-xs text-white/40">
            &copy; 2026 GES Africa. Tous droits réservés.
          </p>
          <div class="flex items-center gap-6">
            <a [routerLink]="['/mentions-legales']" class="text-xs text-white/40 hover:text-ges-green transition">Mentions légales</a>
            <a [routerLink]="['/politique-confidentialite']" class="text-xs text-white/40 hover:text-ges-green transition">Confidentialité</a>
            <a [routerLink]="['/cookies']" class="text-xs text-white/40 hover:text-ges-green transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
