import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-ges-dark text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div class="flex items-center space-x-3 mb-4">
              <div class="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <i class="fas fa-bolt text-white"></i>
              </div>
              <div>
                <div class="text-xl font-bold">GES</div>
                <div class="text-xs font-semibold text-ges-green">AFRICA</div>
              </div>
            </div>
            <p class="text-gray-400 text-sm">
              Bureau d'études premium ENR, BIM & Smart Building
            </p>
          </div>

          <div>
            <h3 class="font-bold text-lg mb-4">Expertises</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li><a href="#" class="hover:text-ges-green transition">Photovoltaïque</a></li>
              <li><a href="#" class="hover:text-ges-green transition">BIM MEP</a></li>
              <li><a href="#" class="hover:text-ges-green transition">GTB/GTC</a></li>
              <li><a href="#" class="hover:text-ges-green transition">CFO/CFA</a></li>
              <li><a href="#" class="hover:text-ges-green transition">IRVE</a></li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold text-lg mb-4">L'entreprise</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li><a href="#apropos" class="hover:text-ges-green transition">À propos</a></li>
              <li><a href="#methode" class="hover:text-ges-green transition">Méthode</a></li>
              <li><a href="#" class="hover:text-ges-green transition">Carrières</a></li>
              <li><a href="#contact" class="hover:text-ges-green transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold text-lg mb-4">Contact</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-center">
                <i class="fas fa-envelope mr-2 text-ges-green"></i>
                contact@ges-africa.com
              </li>
              <li class="flex items-center">
                <i class="fas fa-map-marker-alt mr-2 text-ges-green"></i>
                Afrique – Europe – MENA
              </li>
            </ul>
            <div class="flex space-x-4 mt-4">
              <a href="#" class="text-gray-400 hover:text-ges-green transition">
                <i class="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div>
            © 2026 GES Africa. Tous droits réservés.
          </div>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="hover:text-ges-green transition">Mentions légales</a>
            <a href="#" class="hover:text-ges-green transition">Politique de confidentialité</a>
            <a href="#" class="hover:text-ges-green transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
