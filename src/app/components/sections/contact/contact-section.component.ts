import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="py-20 bg-ges-light">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-ges-dark mb-4">
            Contactez-nous
          </h2>
          <p class="text-xl text-gray-600">
            Décrivez votre projet et nous vous répondrons rapidement avec un cadrage et les livrables
          </p>
        </div>

        <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="name" class="block text-sm font-semibold text-ges-dark mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  [(ngModel)]="formData.name"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ges-green focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label for="company" class="block text-sm font-semibold text-ges-dark mb-2">
                  Entreprise *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  [(ngModel)]="formData.company"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ges-green focus:border-transparent"
                  placeholder="Votre entreprise"
                />
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="email" class="block text-sm font-semibold text-ges-dark mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  [(ngModel)]="formData.email"
                  required
                  email
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ges-green focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label for="phone" class="block text-sm font-semibold text-ges-dark mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  [(ngModel)]="formData.phone"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ges-green focus:border-transparent"
                  placeholder="+XXX XX XX XX XX"
                />
              </div>
            </div>

            <div class="mb-6">
              <label for="subject" class="block text-sm font-semibold text-ges-dark mb-2">
                Type de projet *
              </label>
              <select
                id="subject"
                name="subject"
                [(ngModel)]="formData.subject"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ges-green focus:border-transparent"
              >
                <option value="" disabled selected>Sélectionnez un type de projet</option>
                <option value="photovoltaique">Photovoltaïque & stockage</option>
                <option value="bim">BIM MEP</option>
                <option value="gtb">GTB/GTC</option>
                <option value="cfo">CFO/CFA</option>
                <option value="irve">IRVE</option>
                <option value="autre">Autre expertise</option>
              </select>
            </div>

            <div class="mb-6">
              <label for="message" class="block text-sm font-semibold text-ges-dark mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                [(ngModel)]="formData.message"
                required
                rows="6"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ges-green focus:border-transparent resize-none"
                placeholder="Décrivez votre projet : objectifs (économies, conformité, décarbonation), site, délais..."
              ></textarea>
            </div>

            <div class="mb-6">
              <label class="flex items-start">
                <input
                  type="checkbox"
                  name="consent"
                  [(ngModel)]="formData.consent"
                  required
                  class="mt-1 mr-3 w-4 h-4 text-ges-green border-gray-300 rounded focus:ring-ges-green"
                />
                <span class="text-sm text-gray-600">
                  J'accepte que mes données soient utilisées pour me recontacter concernant ma demande *
                </span>
              </label>
            </div>

            <div class="text-center">
              <button
                type="submit"
                [disabled]="!contactForm.valid || isSubmitting"
                class="bg-ges-green text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span *ngIf="!isSubmitting">
                  <i class="fas fa-paper-plane mr-2"></i>
                  Envoyer la demande
                </span>
                <span *ngIf="isSubmitting">
                  <i class="fas fa-spinner fa-spin mr-2"></i>
                  Envoi en cours...
                </span>
              </button>
            </div>

            <div *ngIf="submitStatus === 'success'" class="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
              <i class="fas fa-check-circle mr-2"></i>
              Message envoyé avec succès ! Nous vous répondrons sous 24-48h.
            </div>

            <div *ngIf="submitStatus === 'error'" class="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
              <i class="fas fa-exclamation-circle mr-2"></i>
              Une erreur est survenue. Veuillez réessayer ou nous contacter à direction@ges-africa.com
            </div>
          </form>
        </div>

        <div class="mt-12 text-center text-gray-600">
          <p class="mb-4">Ou contactez-nous directement :</p>
          <div class="flex flex-col md:flex-row justify-center items-center gap-6">
            <a href="mailto:direction@ges-africa.com" class="flex items-center hover:text-ges-green transition">
              <i class="fas fa-envelope text-ges-green mr-2"></i>
              direction@ges-africa.com
            </a>
            <span class="hidden md:block text-gray-300">|</span>
            <div class="flex items-center">
              <i class="fas fa-map-marker-alt text-ges-green mr-2"></i>
              Afrique – Europe – MENA
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactSectionComponent {
  formData = {
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false
  };

  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  onSubmit() {
    if (!this.formData.consent) {
      return;
    }

    this.isSubmitting = true;
    this.submitStatus = 'idle';

    const formspreeUrl = 'https://formspree.io/f/xnjbnloz';

    fetch(formspreeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.formData.name,
        company: this.formData.company,
        email: this.formData.email,
        phone: this.formData.phone || 'Non renseigné',
        subject: `Nouvelle demande : ${this.formData.subject}`,
        message: this.formData.message,
        _replyto: this.formData.email,
        _subject: `📧 GES Africa - ${this.formData.subject}`
      })
    })
      .then(response => {
        if (response.ok) {
          this.submitStatus = 'success';
          setTimeout(() => {
            this.formData = {
              name: '',
              company: '',
              email: '',
              phone: '',
              subject: '',
              message: '',
              consent: false
            };
            this.submitStatus = 'idle';
          }, 3000);
        } else {
          this.submitStatus = 'error';
        }
      })
      .catch(() => {
        this.submitStatus = 'error';
      })
      .finally(() => {
        this.isSubmitting = false;
      });
  }
}
