import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../shared/service-card/service-card.component';
import { RevealDirective, SpotlightDirective } from '../../../shared/directives/motion.directives';

interface Service {
  icon: string;
  title: string;
  description: string;
  details: string[];
}

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent, RevealDirective, SpotlightDirective],
  template: `
    <section id="services" class="py-28 md:py-36 bg-ges-dark text-white relative overflow-hidden">
      <div class="absolute top-1/3 -left-40 w-lg h-128 bg-ges-green/10 rounded-full blur-[130px] animate-float-slow"></div>
      <div class="absolute bottom-0 -right-40 w-md h-112 bg-ges-blue/50 rounded-full blur-[130px] animate-float-slow-rev"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-16 md:mb-20">
          <div class="lg:col-span-7">
            <div appReveal class="inline-flex items-center gap-3 text-ges-green text-xs font-semibold uppercase tracking-[0.25em] mb-6">
              <span class="w-10 h-px bg-ges-green"></span> Expertises
            </div>
            <h2 appReveal="lines" class="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              <span class="line"><span style="--d:0">Nos</span></span>
              <span class="line"><span style="--d:1" class="gradient-text">expertises</span></span>
            </h2>
          </div>
          <p appReveal [revealDelay]="250" class="lg:col-span-5 text-lg text-white/60 leading-relaxed">
            Nous concevons des projets énergétiques et digitaux comme des actifs durables — de l'ingénierie de terrain aux outils numériques, pour développeurs, industriels et institutions.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          <app-service-card
            *ngFor="let service of services; let i = index"
            appReveal [revealDelay]="(i % 3) * 120"
            [class]="spans[i]"
            [index]="i + 1"
            [icon]="service.icon"
            [title]="service.title"
            [description]="service.description"
            [details]="service.details">
          </app-service-card>
        </div>

        <!-- Pôle digital : jumeau numérique du stock -->
        <div id="digital" appReveal class="mt-4 md:mt-5 scroll-mt-28">
          <div appSpotlight
               class="rounded-3xl p-7 md:p-9 border border-white/10 bg-white/3 group transition-all duration-500 hover:border-ges-green/50 hover:-translate-y-1.5">
            <div class="flex items-start justify-between mb-8">
              <div class="w-14 h-14 bg-ges-green/10 rounded-2xl flex items-center justify-center group-hover:bg-ges-green group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                <i class="fas fa-project-diagram text-ges-green text-xl group-hover:text-ges-dark transition-colors duration-500"></i>
              </div>
              <span class="font-display text-5xl font-bold text-outline select-none group-hover:text-ges-green/30 transition-colors duration-500">07</span>
            </div>
            <div class="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12">
              <div class="lg:col-span-7">
                <h3 class="font-display text-xl md:text-2xl font-bold text-white mb-3">
                  Jumeaux numériques &amp; gestion de stock
                </h3>
                <p class="text-white/55 text-sm md:text-base leading-relaxed mb-6">
                  Des outils numériques conçus par des ingénieurs qui connaissent les installations : une réplique
                  virtuelle de vos magasins et équipements, connectée à vos données, pour une gestion de stock
                  intelligente au service de l'industrie africaine.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span *ngFor="let s of sectors; let i = index"
                        class="px-3.5 py-1.5 rounded-full text-xs md:text-sm border"
                        [class]="i < 2 ? 'bg-ges-green text-ges-dark font-semibold border-ges-green' : 'border-white/20 text-white/70'">
                    {{ s }}
                  </span>
                </div>
              </div>

              <!-- Actif physique ⇄ jumeau numérique -->
              <div class="lg:col-span-5">
                <div class="rounded-2xl border border-white/10 bg-white/3 p-6 md:p-8">
                  <svg viewBox="0 0 460 260" class="w-full h-auto" role="img"
                       aria-label="Un actif physique et son jumeau numérique, synchronisés">
                    <g class="animate-float-y">
                      <polygon points="100,40 190,90 100,140 10,90" fill="#7AC143"/>
                      <polygon points="10,90 100,140 100,240 10,190" fill="#2D3E50"/>
                      <polygon points="100,140 190,90 190,190 100,240" fill="#243447"/>
                    </g>
                    <g fill="none" stroke="#B6E67F" stroke-width="2" stroke-dasharray="5 6" stroke-linecap="round">
                      <path d="M205 70 Q230 45 255 70"/>
                      <path d="M255 190 Q230 215 205 190"/>
                    </g>
                    <polygon points="255,70 244,66 248,78" fill="#B6E67F"/>
                    <polygon points="205,190 216,194 212,182" fill="#B6E67F"/>
                    <g class="animate-float-y" style="animation-delay:-2.5s" fill="none" stroke="#7AC143" stroke-width="2">
                      <polygon points="360,40 450,90 450,190 360,240 270,190 270,90"/>
                      <polyline points="270,90 360,140 450,90"/>
                      <line x1="360" y1="140" x2="360" y2="240"/>
                    </g>
                    <g fill="#7AC143">
                      <circle cx="360" cy="40" r="5"/><circle cx="450" cy="90" r="5"/>
                      <circle cx="450" cy="190" r="5"/><circle cx="360" cy="240" r="5"/>
                      <circle cx="270" cy="190" r="5"/><circle cx="270" cy="90" r="5"/>
                      <circle cx="360" cy="140" r="5"><animate attributeName="r" values="5;8;5" dur="2.4s" repeatCount="indefinite"/></circle>
                    </g>
                  </svg>
                  <div class="flex justify-between text-sm text-white/60 px-2 mt-2">
                    <span>Actif physique</span><span>Jumeau numérique</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Offre -->
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 mb-12">
              <div *ngFor="let o of offers; let i = index" class="border-t-2 border-ges-green pt-4 group">
                <div class="flex items-center justify-between mb-3">
                  <span class="font-display text-2xl font-bold text-ges-green">0{{ i + 1 }}</span>
                  <i [class]="'fas ' + o.icon + ' text-white/30 group-hover:text-ges-green transition-colors duration-500'"></i>
                </div>
                <h4 class="font-display text-lg font-bold mb-1.5">{{ o.title }}</h4>
                <p class="text-sm text-white/55 leading-relaxed">{{ o.description }}</p>
              </div>
            </div>

            <!-- Enjeux résolus + architecture -->
            <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 pt-10 border-t border-white/10">
              <div>
                <h4 class="font-display text-lg font-bold mb-5">Ce que vivent les industriels africains</h4>
                <ul class="space-y-4">
                  <li *ngFor="let c of challenges" class="flex gap-4">
                    <span class="w-10 h-10 shrink-0 bg-ges-green/10 rounded-xl flex items-center justify-center">
                      <i [class]="'fas ' + c.icon + ' text-ges-green text-sm'"></i>
                    </span>
                    <span class="text-sm text-white/55 leading-relaxed">
                      <strong class="block text-white/90 font-semibold">{{ c.title }}</strong>{{ c.description }}
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 class="font-display text-lg font-bold mb-5">Du terrain à la décision</h4>
                <ol class="space-y-3">
                  <li *ngFor="let a of architecture; let last = last" class="flex gap-4">
                    <span class="flex flex-col items-center">
                      <span class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                            [class]="a.highlight ? 'bg-ges-green text-ges-dark' : 'bg-white/10 text-ges-green'">
                        <i [class]="'fas ' + a.icon + ' text-sm'"></i>
                      </span>
                      <span *ngIf="!last" class="w-px grow bg-white/15 mt-2"></span>
                    </span>
                    <span class="text-sm text-white/55 leading-relaxed pb-3">
                      <strong class="block font-semibold" [class]="a.highlight ? 'text-ges-green' : 'text-white/90'">{{ a.title }}</strong>{{ a.description }}
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ServicesSectionComponent {
  /** Disposition bento : certaines cartes occupent 2 colonnes sur grand écran */
  spans = [
    'lg:col-span-2', '', '',
    'lg:col-span-2', '', 'lg:col-span-2'
  ];

  sectors = [
    'Aéronautique', 'Énergie', 'Mines', 'Ports et logistique', 'Automobile',
    'Agro-industrie', 'Pharmacie', 'Ciment', 'Pétrole et gaz'
  ];

  offers = [
    { icon: 'fa-cube', title: 'Modéliser', description: 'Réplique virtuelle des magasins, emplacements, articles et équipements.' },
    { icon: 'fa-plug', title: 'Connecter', description: 'Synchronisation avec l\'ERP, les lecteurs RFID et codes-barres, les capteurs IoT.' },
    { icon: 'fa-chart-line', title: 'Analyser', description: 'Consommations, prévisions de besoins, alertes de rupture et de péremption.' },
    { icon: 'fa-bullseye', title: 'Décider', description: 'Simulation de scénarios, réapprovisionnement optimisé, arbitrages multi-sites.' }
  ];

  challenges = [
    { icon: 'fa-exclamation-triangle', title: 'Pièces critiques', description: 'Une rupture arrête une ligne, une mine, une centrale ou un avion.' },
    { icon: 'fa-certificate', title: 'Traçabilité et conformité', description: 'Numéros de série, certificats, durées de vie, audits réglementaires.' },
    { icon: 'fa-clock', title: 'Stocks dormants', description: 'Surstock, obsolescence et capital immobilisé sur plusieurs sites.' },
    { icon: 'fa-database', title: 'Données dispersées', description: 'ERP, fichiers Excel et inventaires manuels qui ne se parlent pas.' }
  ];

  architecture = [
    { icon: 'fa-cog', title: 'Sources terrain', description: 'ERP, RFID, codes-barres, capteurs IoT, inventaires.', highlight: false },
    { icon: 'fa-cloud', title: 'Plateforme de données', description: 'Collecte, nettoyage, historisation, sécurité des accès.', highlight: false },
    { icon: 'fa-globe', title: 'Jumeau numérique', description: 'Vue 3D ou plan des magasins, état du stock en temps réel.', highlight: true },
    { icon: 'fa-chart-bar', title: 'Pilotage', description: 'Tableaux de bord, alertes, simulations, recommandations.', highlight: false }
  ];

  services: Service[] = [
    {
      icon: 'fa-solar-panel',
      title: 'Photovoltaïque & Stockage',
      description: 'De la faisabilité à l\'exploitation, études complètes pour centrales solaires.',
      details: ['Faisabilité & productible', 'Dimensionnement optimisé', 'Suivi de performance']
    },
    {
      icon: 'fa-cube',
      title: 'BIM MEP',
      description: 'Conception coordonnée multi-lots pour réduire les risques chantier.',
      details: ['Modélisation 3D', 'Détection de clashs', 'Synthèse technique']
    },
    {
      icon: 'fa-building',
      title: 'GTB / GTC',
      description: 'Pilotage énergétique intelligent pour le confort et la performance.',
      details: ['Architecture systèmes', 'Programmation & mise en service', 'Supervision énergie']
    },
    {
      icon: 'fa-bolt',
      title: 'CFO / CFA',
      description: 'Études électriques complètes — courants forts et courants faibles.',
      details: ['Notes de calcul', 'Plans d\'exécution', 'Coordination SSI']
    },
    {
      icon: 'fa-charging-station',
      title: 'IRVE',
      description: 'Solutions de recharge intelligentes intégrées aux ENR.',
      details: ['Dimensionnement', 'Smart charging', 'Intégration PV']
    },
    {
      icon: 'fa-leaf',
      title: 'Audit & Conseil Énergie',
      description: 'Stratégie de décarbonation et optimisation des consommations.',
      details: ['Audit énergétique', 'Plan de sobriété', 'Trajectoire bas-carbone']
    }
  ];
}
