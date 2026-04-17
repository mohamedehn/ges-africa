import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-5 gap-12">
          <!-- Left info panel -->
          <div class="lg:col-span-2">
            <div class="section-divider mb-6"></div>
            <h2 class="text-3xl md:text-4xl font-extrabold text-ges-dark mb-4">
              Parlons de votre projet
            </h2>
            <p class="text-ges-gray leading-relaxed mb-10">
              Décrivez votre projet et nous vous répondrons sous 48h avec un cadrage technique et les livrables attendus.
            </p>

            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-ges-green/10 rounded-xl flex items-center justify-center shrink-0">
                  <i class="fas fa-envelope text-ges-green"></i>
                </div>
                <div>
                  <h3 class="text-sm font-bold text-ges-dark mb-1">Email</h3>
                  <a href="mailto:direction@ges-africa.com" class="text-sm text-ges-gray hover:text-ges-green transition">
                    direction&#64;ges-africa.com
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-ges-green/10 rounded-xl flex items-center justify-center shrink-0">
                  <i class="fas fa-map-marker-alt text-ges-green"></i>
                </div>
                <div>
                  <h3 class="text-sm font-bold text-ges-dark mb-1">Zones d'intervention</h3>
                  <p class="text-sm text-ges-gray">Afrique &middot; Europe &middot; MENA</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-ges-green/10 rounded-xl flex items-center justify-center shrink-0">
                  <i class="fas fa-clock text-ges-green"></i>
                </div>
                <div>
                  <h3 class="text-sm font-bold text-ges-dark mb-1">Temps de réponse</h3>
                  <p class="text-sm text-ges-gray">Sous 24-48h ouvrées</p>
                </div>
              </div>
            </div>

            <div class="mt-10 flex gap-4">
              <a href="#" class="w-10 h-10 bg-ges-dark rounded-lg flex items-center justify-center text-white hover:bg-ges-green transition-colors">
                <i class="fab fa-linkedin-in text-sm"></i>
              </a>
            </div>
          </div>

          <!-- Right form panel -->
          <div class="lg:col-span-3">
            <div class="bg-ges-light rounded-2xl p-8 md:p-10">
              <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
                <div class="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label for="name" class="block text-xs font-bold text-ges-dark mb-2 uppercase tracking-wider">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      [(ngModel)]="formData.name"
                      required
                      class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ges-green/50 focus:border-ges-green text-sm transition"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label for="company" class="block text-xs font-bold text-ges-dark mb-2 uppercase tracking-wider">
                      Entreprise *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      [(ngModel)]="formData.company"
                      required
                      class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ges-green/50 focus:border-ges-green text-sm transition"
                      placeholder="Votre entreprise"
                    />
                  </div>
                </div>

                <div class="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label for="email" class="block text-xs font-bold text-ges-dark mb-2 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      [(ngModel)]="formData.email"
                      required
                      email
                      class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ges-green/50 focus:border-ges-green text-sm transition"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label for="phone" class="block text-xs font-bold text-ges-dark mb-2 uppercase tracking-wider">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      [(ngModel)]="formData.phone"
                      class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ges-green/50 focus:border-ges-green text-sm transition"
                      placeholder="+XXX XX XX XX XX"
                    />
                  </div>
                </div>

                <div class="mb-5">
                  <label for="subject" class="block text-xs font-bold text-ges-dark mb-2 uppercase tracking-wider">
                    Type de projet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    [(ngModel)]="formData.subject"
                    required
                    class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ges-green/50 focus:border-ges-green text-sm transition"
                  >
                    <option value="" disabled selected>Sélectionnez un type de projet</option>
                    <option value="photovoltaique">Photovoltaïque & stockage</option>
                    <option value="bim">BIM MEP</option>
                    <option value="gtb">GTB/GTC</option>
                    <option value="cfo">CFO/CFA</option>
                    <option value="irve">IRVE</option>
                    <option value="audit">Audit & Conseil Énergie</option>
                    <option value="autre">Autre expertise</option>
                  </select>
                </div>

                <div class="mb-5">
                  <label for="message" class="block text-xs font-bold text-ges-dark mb-2 uppercase tracking-wider">
                    Votre projet *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    [(ngModel)]="formData.message"
                    required
                    rows="5"
                    class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ges-green/50 focus:border-ges-green text-sm transition resize-none"
                    placeholder="Décrivez votre projet : objectifs, site, contraintes, délais..."
                  ></textarea>
                </div>

                <div class="mb-6">
                  <label class="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      [(ngModel)]="formData.consent"
                      required
                      class="mt-0.5 w-4 h-4 text-ges-green border-gray-300 rounded focus:ring-ges-green"
                    />
                    <span class="text-xs text-ges-gray leading-relaxed">
                      J'accepte que mes données soient traitées pour me recontacter concernant ma demande. *
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  [disabled]="!contactForm.valid || isSubmitting"
                  class="w-full btn-primary px-8 py-4 rounded-xl font-semibold text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                >
                  <span *ngIf="!isSubmitting" class="inline-flex items-center gap-2">
                    <i class="fas fa-paper-plane text-sm"></i>
                    Envoyer la demande
                  </span>
                  <span *ngIf="isSubmitting" class="inline-flex items-center gap-2">
                    <i class="fas fa-spinner fa-spin text-sm"></i>
                    Envoi en cours...
                  </span>
                </button>

                <div *ngIf="submitStatus === 'success'" class="mt-5 p-4 bg-ges-green/10 border border-ges-green/20 text-ges-green rounded-xl text-center text-sm font-medium">
                  <i class="fas fa-check-circle mr-2"></i>
                  Message envoyé ! Nous vous répondrons sous 24-48h.
                </div>

                <div *ngIf="submitStatus === 'error'" class="mt-5 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-center text-sm">
                  <i class="fas fa-exclamation-circle mr-2"></i>
                  Erreur survenue. Réessayez ou écrivez à direction&#64;ges-africa.com
                </div>
              </form>
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
