import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../components/shared/logo/logo.component';

@Component({
  selector: 'app-mentions-legales',
  standalone: true,
  imports: [CommonModule, RouterLink, LogoComponent],
  template: `
    <div class="min-h-screen bg-white">
      <!-- Navigation -->
      <nav class="bg-white shadow-md fixed w-full top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-20">
            <a [routerLink]="['/']">
              <app-logo size="medium"></app-logo>
            </a>
            <a [routerLink]="['/']" class="bg-ges-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Retour à l'accueil
            </a>
          </div>
        </div>
      </nav>

      <!-- Content -->
      <div class="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl font-bold text-ges-dark mb-8 text-center">Mentions Légales</h1>

          <div class="prose prose-lg max-w-none text-gray-700 space-y-8">
            <!-- Propriété -->
            <section>
              <h2 class="text-2xl font-bold text-ges-dark mb-4">1. PROPRIÉTÉ DU SITE</h2>
              <p class="mb-4">
                Le présent site est la propriété de <strong>GES Africa</strong>
              </p>
              <ul class="list-disc pl-6 space-y-2">
                <li><strong>Forme juridique</strong> : [À compléter]</li>
                <li><strong>Siège social</strong> : [À compléter]</li>
                <li><strong>SIRET</strong> : [À compléter]</li>
                <li><strong>Email</strong> : direction@ges-africa.com</li>
                <li><strong>Téléphone</strong> : [À compléter]</li>
              </ul>
              <p class="mt-4">
                <strong>Directeur de la publication</strong> : [Nom et Fonction]
              </p>
              <p class="mt-2">
                Toute reproduction même partielle est interdite sans autorisation préalable.
              </p>
            </section>

            <!-- Prestataires -->
            <section>
              <h2 class="text-2xl font-bold text-ges-dark mb-4">2. PRESTATAIRES</h2>
              <div class="space-y-4">
                <div>
                  <h3 class="font-semibold text-lg text-ges-dark">Création / Conception / Développement :</h3>
                  <p>[Nom de l'entreprise de développement]</p>
                  <p>SIRET : [À compléter]</p>
                  <p>Email : [À compléter]</p>
                  <p>Web : [À compléter]</p>
                </div>
                <div>
                  <h3 class="font-semibold text-lg text-ges-dark">Hébergement :</h3>
                  <p>[Nom de l'hébergeur]</p>
                  <p>[Adresse de l'hébergeur]</p>
                </div>
              </div>
            </section>

            <!-- Propriété intellectuelle -->
            <section>
              <h2 class="text-2xl font-bold text-ges-dark mb-4">3. PROPRIÉTÉ INTELLECTUELLE</h2>
              <p>
                L'ensemble du contenu du site (textes, images, vidéos, logos, design, etc.) est protégé par le droit d'auteur,
                le droit des marques et/ou tout autre droit de propriété intellectuelle. Toute reproduction, représentation,
                modification, publication, transmission ou dénaturation, totale ou partielle du site ou de son contenu,
                par quelque procédé que ce soit et sur quelque support que ce soit, est interdite sans l'autorisation écrite
                préalable de GES Africa.
              </p>
            </section>

            <!-- Données personnelles -->
            <section>
              <h2 class="text-2xl font-bold text-ges-dark mb-4">4. DONNÉES PERSONNELLES</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous  disposez d'un droit d'accès,
                de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p class="mt-4">
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse :
                <a href="mailto:direction@ges-africa.com" class="text-ges-green hover:underline">direction@ges-africa.com</a>
              </p>
              <p class="mt-4">
                Pour plus d'informations, consultez notre
                <a [routerLink]="['/politique-confidentialite']" class="text-ges-green hover:underline">Politique de Confidentialité</a>.
              </p>
            </section>

            <!-- Cookies -->
            <section>
              <h2 class="text-2xl font-bold text-ges-dark mb-4">5. COOKIES</h2>
              <p>
                Le site utilise des cookies pour améliorer votre expérience de navigation. Pour en savoir plus sur les cookies
                que nous utilisons et sur la façon de les gérer, consultez notre
                <a [routerLink]="['/cookies']" class="text-ges-green hover:underline">Politique de Gestion des Cookies</a>.
              </p>
            </section>

            <!-- Responsabilité -->
            <section>
              <h2 class="text-2xl font-bold text-ges-dark mb-4">6. RESPONSABILITÉ</h2>
              <p>
                GES Africa s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site.
                Toutefois, GES Africa ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations
                mises à disposition sur ce site. En conséquence, GES Africa décline toute responsabilité pour toute
                imprécision, inexactitude ou omission portant sur des informations disponibles sur le site.
              </p>
            </section>

            <!-- Droit applicable -->
            <section>
              <h2 class="text-2xl font-bold text-ges-dark mb-4">7. DROIT APPLICABLE</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. Tout litige relatif à l'interprétation
                et/ou à l'exécution de celles-ci relève des tribunaux français compétents.
              </p>
            </section>
          </div>

          <div class="mt-12 text-center">
            <p class="text-sm text-gray-500">Dernière mise à jour : Février 2026</p>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer class="bg-ges-dark text-white py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p class="text-gray-400 text-sm">© 2026 GES Africa. Tous droits réservés.</p>
          <div class="flex justify-center space-x-6 mt-4 text-sm">
            <a [routerLink]="['/mentions-legales']" class="text-gray-400 hover:text-ges-green transition">Mentions légales</a>
            <a [routerLink]="['/politique-confidentialite']" class="text-gray-400 hover:text-ges-green transition">Politique de confidentialité</a>
            <a [routerLink]="['/cookies']" class="text-gray-400 hover:text-ges-green transition">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  `
})
export class MentionsLegalesComponent {}
