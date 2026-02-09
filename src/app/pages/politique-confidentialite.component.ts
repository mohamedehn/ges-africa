import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../components/shared/logo/logo.component';

@Component({
  selector: 'app-politique-confidential ite',
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
          <h1 class="text-4xl font-bold text-ges-dark mb-8 text-center">Politique de Confidentialité</h1>

          <div class="prose prose-lg max-w-none text-gray-700 space-y-8">
            <!-- Introduction -->
            <section>
              <p class="text-lg mb-6">
                GES Africa accorde une grande importance à la protection de vos données personnelles.
                La présente politique de confidentialité explique comment nous collectons, utilisons, partageons
                et protégeons vos informations personnelles lorsque vous visitez notre site web.
              </p>
            </section>

            <!-- Responsable du traitement -->
            <section>
              <h2 class="text-2xl font-bold text-ges-dark mb-4">1. RESPONSABLE DU TRAITEMENT</h2>
              <p>
                GES Africa est responsable du traitement au sens du Règlement (UE) 2016/679 dit Règlement Général
                sur la Protection des Données ou « RGPD », pour la collecte et le traitement des données à caractère
                personnel effectuées sur le site accessible à l'adresse URL : [URL du site]
              </p>
              <p class="mt-4">
                <strong>Contact</strong> : direction@ges-africa.com
              </p>
            </section>

            <!-- Données collectées -->
            <section>
              <h2 class="text-2xl font-bold text-ges-dark mb-4">2. DONNÉES COLLECTÉES</h2>
              <p class="mb-4">Nous sommes susceptibles de collecter les catégories de données personnelles suivantes :</p>
              <ul class="list-disc pl-6 space-y-2">
                <li><strong>Données d'identification</strong> : Nom, prénom, fonction</li>
                <li><strong>Données de contact</strong> : Adresse email, numéro de téléphone, entreprise</li>
                <li><strong>Données de navigation</strong> : Adresse IP, type de navigateur, pages visitées</li>
                <li><strong>Données de communication</strong> : Messages envoyés via le formulaire de contact</li>
              </ul>
            </section>

            <!-- Finalités du traitement -->
            <section>
              <h2 class="text-2xl font-bold text-ges-dark mb-4">3. FINALITÉS DU TRAITEMENT</h2>
              <p class="mb-4">GES Africa traite vos données personnelles pour les finalités suivantes :</p>
              <ul class="list-disc pl-6 space-y-2">
                <li>Répondre à vos demandes d'information ou de contact</li>
                <li>Vous envoyer des informations sur nos services et expertise</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Analyser la fréquentation et l'utilisation de notre site</li>
                <li>Respecter nos obligations légales et réglementaires</li>
              </ul>
            </section>

            <!-- Base légale -->
            <section>
              <h2 class="text-2xl font-bold text-ges-dark mb-4">4. BASE LÉGALE DU TRAITEMENT</h2>
              <p class="mb-4">Le traitement de vos données personnelles repose sur les bases légales suivantes :</p>
              <ul class="list-disc pl-6 space-y-2">
                <li><strong>Votre consentement</strong> : Pour l'envoi d'informations commerciales</li>
                <li><strong>L'exécution d'un contrat</strong> : Pour répondre à vos demandes de services</li>
                <li><strong>Notre intérêt légitime</strong> : Pour améliorer nos services et analyser l'audience</li>
                <li><strong>Le respect d'obligations légales</strong> : Pour respecter nos obligations fiscales et comptables</li>
              </ul>
            </section>

            <!-- Destinataires -->
            <section>
              <h2 class="text-2xl font-bold text-ges-dark mb-4">5. DESTINATAIRES DES DONNÉES</h2>
              <p>
                Vos données personnelles sont destinées à GES Africa et sont susceptibles d'être transmises
                à nos prestataires de services et sous-traitants dans le cadre strict de l'exécution de leurs prestations.
              </p>
              <p class="mt-4">
                Les données ne sont en aucun cas communiquées, ni vendues, ni cédées, ni louées à des tiers
                en dehors des cas mentionnés ci-dessus.
              </p>
              <p class="mt-4">
                Les données sont stockées exclusivement sur le territoire français et ne font l'objet d'aucun
                transfert en dehors de l'Union Européenne.
              </p>
            </section>

            <!-- Durée de conservation -->
            <section>
              <h2 class="text-2xl font-bold text-ges-dark mb-4">6. DURÉE DE CONSERVATION</h2>
              <p class="mb-4">Vos données personnelles sont conservées pour les durées suivantes :</p>
              <ul class="list-disc pl-6 space-y-2">
                <li><strong>Données de contact</strong> : 3 ans à compter du dernier contact</li>
                <li><strong>Données de navigation</strong> : 13 mois maximum</li>
                <li><strong>Documents comptables</strong> : 10 ans conformément aux obligations légales</li>
              </ul>
              <p class="mt-4">
                À l'issue de ces durées, vos données sont supprimées ou anonymisées.
              </p>
            </section>

            <!-- Droits des personnes -->
            <section>
              <h2 class="text-2xl font-bold text-ges-dark mb-4">7. VOS DROITS</h2>
              <p class="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul class="list-disc pl-6 space-y-2">
                <li><strong>Droit d'accès</strong> : Obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification</strong> : Corriger vos données inexactes ou incomplètes</li>
                <li><strong>Droit d'effacement</strong> : Demander la suppression de vos données</li>
                <li><strong>Droit à la limitation</strong> : Limiter le traitement de vos données</li>
                <li><strong>Droit d'opposition</strong> : Vous opposer au traitement de vos données</li>
                <li><strong>Droit à la portabilité</strong> : Récupérer vos données dans un format structuré</li>
                <li><strong>Droit de retirer votre consentement</strong> : À tout moment, sans affecter la licéité du traitement</li>
              </ul>
              <p class="mt-6">
                <strong>Pour exercer vos droits, contactez-nous à :</strong><br/>
                Email : <a href="mailto:direction@ges-africa.com" class="text-ges-green hover:underline">direction@ges-africa.com</a><br/>
                Adresse : [Adresse postale]
              </p>
              <p class="mt-4">
                Vous disposez également du droit d'introduire une réclamation auprès de la CNIL
                (Commission Nationale de l'Informatique et des Libertés) si vous estimez que le traitement
                de vos données personnelles n'est pas conforme à la réglementation :
                <a href="https://www.cnil.fr" target="_blank" class="text-ges-green hover:underline">www.cnil.fr</a>
              </p>
            </section>

            <!-- Sécurité -->
            <section>
              <h2 class="text-2xl font-bold text-ges-dark mb-4">8. SÉCURITÉ DES DONNÉES</h2>
              <p>
                GES Africa met en œuvre des mesures techniques et organisationnelles appropriées pour protéger
                vos données personnelles contre la destruction accidentelle ou illicite, la perte accidentelle,
                l'altération, la diffusion ou l'accès non autorisés.
              </p>
              <p class="mt-4">
                Ces mesures de sécurité sont régulièrement évaluées et mises à jour afin de garantir un niveau
                de protection adapté aux risques.
              </p>
            </section>

            <!-- Modifications -->
            <section>
              <h2 class="text-2xl font-bold text-ges-dark mb-4">9. MODIFICATIONS DE LA POLITIQUE</h2>
              <p>
                GES Africa se réserve le droit de modifier la présente politique de confidentialité à tout moment.
                Toute modification est effective dès sa publication sur le site. Nous vous encourageons à consulter
                régulièrement cette page pour rester informé de la manière dont nous protégeons vos données.
              </p>
            </section>

            <!-- Contact -->
            <section>
              <h2 class="text-2xl font-bold text-ges-dark mb-4">10. CONTACT</h2>
              <p>
                Pour toute question relative à cette politique de confidentialité ou au traitement de vos données
                personnelles, vous pouvez nous contacter à :
              </p>
              <p class="mt-4">
                <strong>Email</strong> : <a href="mailto:direction@ges-africa.com" class="text-ges-green hover:underline">direction@ges-africa.com</a><br/>
                <strong>Adresse</strong> : [Adresse postale]<br/>
                <strong>Zone d'intervention</strong> : Afrique – Europe – MENA
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
export class PolitiqueConfidentialiteComponent {}
