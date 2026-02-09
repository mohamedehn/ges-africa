import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../components/shared/logo/logo.component';

@Component({
  selector: 'app-cookies',
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
          <h1 class="text-4xl font-bold text-ges-dark mb-8 text-center">Politique de Gestion des Cookies</h1>

          <div class="prose prose-lg max-w-none text-gray-700 space-y-8">
            <!-- Introduction -->
            <section>
              <h2 class="text-2xl font-bold text-ges-dark mb-4">INFORMATIONS À PROPOS DES COOKIES</h2>
              <p>
                Lors de la consultation de notre site internet, des cookies sont déposés sur le terminal
                (ordinateur, tablette, smartphone) avec lequel vous naviguez.
              </p>
            </section>

            <!-- Qu'est-ce qu'un cookie -->
            <section>
              <h2 class="text-2xl font-bold text-ges-dark mb-4">QU'EST-CE QU'UN COOKIE ?</h2>
              <p>
                Le cookie est un petit fichier texte déposé dans un espace dédié du disque dur de votre terminal
                qui va stocker des informations relatives à votre navigation. Il est téléchargé par votre navigateur
                lors de la visite d'un site internet.
              </p>
              <p class="mt-4">
                Lorsque vous revenez sur ce site en utilisant le même appareil, le cookie et les informations qui y
                sont stockés sont soit envoyés au site internet qui l'a créé (cookie propriétaire) soit envoyés à un
                autre site internet auquel il appartient (cookie tiers).
              </p>
              <p class="mt-4">
                Certains cookies sont extrêmement utiles car ils peuvent améliorer l'expérience de l'utilisateur.
                Par exemple, lorsque vous consultez plusieurs fois un site internet avec un même navigateur, les cookies
                gardent en mémoire vos préférences, la manière dont vous utilisez un site et adaptent le contenu affiché
                pour qu'il soit adapté à vos besoins et intérêts personnels.
              </p>
            </section>

            <!-- Durée de conservation -->
            <section>
              <h2 class="text-2xl font-bold text-ges-dark mb-4">QUELLE EST LA DURÉE DE CONSERVATION D'UN COOKIE ?</h2>
              <p>
                Les cookies déposés par GES Africa, nos sous-traitants et nos partenaires et les données de navigations
                recueillies sont conservées pour une durée maximale de 13 mois à compter du dépôt sur votre terminal.
                À l'expiration de ce délai, votre consentement sera à nouveau nécessaire au dépôt du cookie.
              </p>
            </section>

            <!-- Catégories de cookies -->
            <section>
              <h2 class="text-2xl font-bold text-ges-dark mb-4">LES CATÉGORIES DE COOKIES</h2>

              <div class="mt-6">
                <h3 class="text-xl font-semibold text-ges-dark mb-3">LES COOKIES ESSENTIELS :</h3>
                <p>
                  Les cookies essentiels, également appelés cookies « strictement nécessaires », assurent des fonctions
                  sans lesquelles le site ne peut pas fonctionner correctement. Ils sont stockés sur votre appareil
                  uniquement pendant la durée de la session d'utilisation du navigateur, et votre consentement n'est
                  pas requis pour ce type de cookie.
                </p>
              </div>

              <div class="mt-6">
                <h3 class="text-xl font-semibold text-ges-dark mb-3">LES COOKIES DE MESURES D'AUDIENCE ET DE STATISTIQUES :</h3>
                <p>
                  Les cookies de mesures d'audience et de statistique permettent de produire des statistiques anonymes
                  quant à la fréquentation du site (ex : nombre de visites, les pages consultées, le temps passé…).
                  Ces cookies permettent d'adapter le site aux demandes des visiteurs et d'améliorer sa performance
                  et ses fonctionnalités.
                </p>
              </div>

              <div class="mt-6">
                <h3 class="text-xl font-semibold text-ges-dark mb-3">LES COOKIES FONCTIONNELS :</h3>
                <p>
                  Les cookies fonctionnels permettent à un site internet d'enregistrer des informations qui ont déjà
                  été fournies (ex : le nom de l'utilisateur, la localisation) et d'offrir à l'utilisateur des fonctions
                  améliorées et personnalisées.
                </p>
              </div>

              <div class="mt-6">
                <h3 class="text-xl font-semibold text-ges-dark mb-3">LES COOKIES PUBLICITAIRES :</h3>
                <p>
                  Les cookies publicitaires sont utilisés pour diffuser des publicités qui sont pertinentes pour certains
                  utilisateurs spécifiques et adaptées à leurs intérêts. (Note : GES Africa n'utilise pas de cookies publicitaires)
                </p>
              </div>
            </section>

            <!-- Gestion des cookies -->
            <section>
              <h2 class="text-2xl font-bold text-ges-dark mb-4">COMMENT GÉRER ET SUPPRIMER LES COOKIES ?</h2>
              <p>
                Lors de votre première visite sur le site, un bandeau vous informe de la présence de ces cookies
                et vous invite à les accepter ou les refuser. Les cookies, qui nécessitent votre consentement,
                seront déposés uniquement si vous y consentez.
              </p>
              <p class="mt-4">
                Par ailleurs, pour gérer les cookies, la plupart des navigateurs vous permettent de refuser ou
                d'accepter tous les cookies ou de n'en accepter que certains. Vous trouverez la procédure de gestion
                et de suppression des cookies à la rubrique aide de votre navigateur, ou directement en cliquant
                sur les liens suivants :
              </p>
              <ul class="list-disc pl-6 space-y-2 mt-4">
                <li>
                  Pour Chrome :
                  <a href="https://support.google.com/chrome/answer/95647?hl=fr" target="_blank" class="text-ges-green hover:underline">
                    Cliquez ici
                  </a>
                </li>
                <li>
                  Pour Safari :
                  <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" class="text-ges-green hover:underline">
                    Cliquez ici
                  </a>
                </li>
                <li>
                  Pour Firefox :
                  <a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies-preferences" target="_blank" class="text-ges-green hover:underline">
                    Cliquez ici
                  </a>
                </li>
                <li>
                  Pour Edge :
                  <a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" class="text-ges-green hover:underline">
                    Cliquez ici
                  </a>
                </li>
                <li>
                  Pour Opera :
                  <a href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank" class="text-ges-green hover:underline">
                    Cliquez ici
                  </a>
                </li>
              </ul>
              <p class="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <strong>Attention :</strong> Si vous choisissez de désactiver tous les cookies, certaines fonctionnalités
                du site peuvent ne plus fonctionner correctement.
              </p>
            </section>

            <!-- Cookies utilisés -->
            <section>
              <h2 class="text-2xl font-bold text-ges-dark mb-4">COOKIES UTILISÉS SUR LE SITE GES AFRICA</h2>
              <p class="mb-4">Notre site utilise les types de cookies suivants :</p>
              <ul class="list-disc pl-6 space-y-2">
                <li><strong>Cookies essentiels</strong> : Pour assurer le fonctionnement de base du site</li>
                <li><strong>Cookies de performance</strong> : Pour analyser l'utilisation du site et améliorer les performances</li>
                <li><strong>Cookies de préférences</strong> : Pour mémoriser vos choix (langue, région, etc.)</li>
              </ul>
              <p class="mt-4">
                Nous n'utilisons pas de cookies publicitaires ou de ciblage marketing.
              </p>
            </section>

            <!-- Mises à jour -->
            <section>
              <h2 class="text-2xl font-bold text-ges-dark mb-4">MISES À JOUR DE LA POLITIQUE DE GESTION DES COOKIES</h2>
              <p>
                GES Africa se réserve le droit de modifier ou de mettre à jour cette politique lorsque cela devient
                nécessaire, afin de s'adapter aux retours clients, aux changements liés à nos produits et services,
                ou pour être conforme à de nouvelles exigences légales.
              </p>
              <p class="mt-4">
                Nous vous prions de bien vouloir la consulter régulièrement. Lorsque nous mettons à jour cette politique,
                nous révisons la date de « dernière mise à jour » affichée sur cette page.
              </p>
            </section>

            <!-- Contact -->
            <section>
              <h2 class="text-2xl font-bold text-ges-dark mb-4">CONTACT</h2>
              <p>
                Pour toute question relative à l'utilisation des cookies sur notre site, vous pouvez nous contacter à :
              </p>
              <p class="mt-4">
                <strong>Email</strong> : <a href="mailto:direction@ges-africa.com" class="text-ges-green hover:underline">direction@ges-africa.com</a>
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
export class CookiesComponent {}
