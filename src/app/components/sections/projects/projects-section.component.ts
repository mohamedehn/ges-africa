import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { RevealDirective } from '../../../shared/directives/motion.directives';

interface Project {
  imageUrl: string;
  imageSmall?: string;
  fullWidth?: number;
  title: string;
  description: string;
  tags: string[];
  metric: string;
  metricLabel: string;
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, RevealDirective],
  template: `
    <section id="realisations" class="py-28 md:py-36 bg-ges-light relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-16 md:mb-20">
          <div class="lg:col-span-8">
            <div appReveal class="inline-flex items-center gap-3 text-ges-green text-xs font-semibold uppercase tracking-[0.25em] mb-6">
              <span class="w-10 h-px bg-ges-green"></span> Réalisations
            </div>
            <h2 appReveal="lines" class="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-ges-dark tracking-tight leading-[1.05]">
              <span class="line"><span style="--d:0">Typologies</span></span>
              <span class="line"><span style="--d:1" class="gradient-text">de missions</span></span>
            </h2>
          </div>
          <p appReveal [revealDelay]="250" class="lg:col-span-4 text-lg text-ges-gray leading-relaxed">
            Aperçu des projets types que nous réalisons pour nos clients à travers le continent.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 md:gap-8">
          <app-project-card
            *ngFor="let project of projects; let i = index"
            appReveal [revealDelay]="(i % 2) * 150"
            [class]="i % 2 ? 'md:mt-16' : ''"
            [imageUrl]="project.imageUrl"
            [imageSmall]="project.imageSmall"
            [fullWidth]="project.fullWidth ?? 3840"
            [title]="project.title"
            [description]="project.description"
            [tags]="project.tags"
            [metric]="project.metric"
            [metricLabel]="project.metricLabel">
          </app-project-card>
        </div>

        <!-- Jumeaux numériques : cas d'usage par secteur -->
        <div class="mt-24 md:mt-32">
          <div class="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10">
            <div class="lg:col-span-8">
              <div appReveal class="inline-flex items-center gap-3 text-ges-green text-xs font-semibold uppercase tracking-[0.25em] mb-5">
                <span class="w-10 h-px bg-ges-green"></span> Pôle Digital
              </div>
              <h3 appReveal class="font-display text-3xl md:text-4xl font-bold text-ges-dark tracking-tight leading-[1.1]">
                Jumeaux numériques : une même méthode, <span class="gradient-text">chaque filière</span>
              </h3>
            </div>
            <p appReveal [revealDelay]="200" class="lg:col-span-4 text-ges-gray leading-relaxed">
              Une méthode transposable à tous les secteurs où le stock conditionne la production.
            </p>
          </div>

          <div appReveal class="flex flex-wrap gap-2 mb-6" role="tablist">
            <button *ngFor="let g of useCases" type="button" role="tab"
                    [attr.aria-selected]="g.id === activeCase"
                    (click)="activeCase = g.id"
                    class="px-5 py-2.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2 border transition-all duration-300"
                    [class]="g.id === activeCase ? 'bg-ges-dark text-white border-ges-dark' : 'bg-white border-gray-200 text-ges-gray hover:border-ges-green hover:text-ges-dark'">
              <i [class]="'fas ' + g.icon + ' text-xs text-ges-green'"></i> {{ g.label }}
            </button>
          </div>

          <!-- Panneaux superposés : la hauteur reste celle du plus grand, pas de saut au changement d'onglet -->
          <div class="grid">
            <div *ngFor="let g of useCases" class="col-start-1 row-start-1 self-start w-full bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden transition-opacity duration-300"
                 [class]="g.id === activeCase ? 'opacity-100' : 'opacity-0 invisible pointer-events-none'" [attr.aria-hidden]="g.id !== activeCase">
              <div class="px-6 md:px-8 py-5 border-b border-gray-100 font-display text-lg md:text-xl font-bold text-ges-dark">{{ g.title }}</div>
              <div class="hidden md:grid grid-cols-2 gap-6 px-8 py-3 text-xs uppercase tracking-[0.2em] text-ges-green bg-ges-light">
                <span>{{ g.id === 'autres' ? 'Secteur' : 'Cas d\\'usage' }}</span>
                <span>{{ g.id === 'autres' ? 'Cas d\\'usage et valeur pour le client' : 'Valeur pour le client' }}</span>
              </div>
              <div *ngFor="let r of g.rows" class="grid md:grid-cols-2 gap-1 md:gap-6 px-6 md:px-8 py-4 border-t border-gray-100 hover:bg-ges-light transition-colors">
                <span class="font-semibold text-ges-dark">{{ r.usecase }}</span>
                <span class="text-ges-gray">{{ r.value }}</span>
              </div>
            </div>
          </div>

          <!-- Bénéfices attendus -->
          <div appReveal class="mt-6 bg-ges-dark text-white rounded-3xl p-7 md:p-10">
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
              <div *ngFor="let b of benefits" class="border-t-2 border-ges-green pt-4">
                <div class="font-display text-3xl md:text-4xl font-bold mb-2 whitespace-nowrap">{{ b.value }}</div>
                <p class="text-sm text-white/60 leading-relaxed">{{ b.label }}</p>
              </div>
            </div>
            <p class="mt-8 text-xs text-white/40">
              Ordres de grandeur indicatifs, estimés par notre équipe ; ils seront fixés avec chaque client au cadrage
              et mesurés pendant le pilote.
            </p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProjectsSectionComponent {
  activeCase = 'aero';

  benefits = [
    { value: '15–25 %', label: 'de baisse du stock immobilisé (stocks dormants et surstock)' },
    { value: '30–50 %', label: 'de ruptures en moins sur pièces critiques' },
    { value: '50–80 %', label: 'de temps d\'inventaire gagné (avec RFID ou codes-barres)' },
    { value: '> 98 %', label: 'de fiabilité du stock, visible sur tous les sites' }
  ];

  useCases = [
    {
      id: 'aero', label: 'Aéronautique', icon: 'fa-plane',
      title: 'Disponibilité des pièces et traçabilité',
      rows: [
        { usecase: 'Magasins de pièces de rechange MRO', value: 'Moins d\'avions immobilisés (AOG)' },
        { usecase: 'Suivi de l\'outillage et des calibrations', value: 'Outils conformes et localisés à tout moment' },
        { usecase: 'Traçabilité par numéro de série', value: 'Historique complet, audits facilités' },
        { usecase: 'Pièces à durée de vie limitée', value: 'Alertes avant péremption, moins de rebuts' },
        { usecase: 'Stocks multi-sites et pools de pièces', value: 'Rééquilibrage entre bases, moins de surstock' }
      ]
    },
    {
      id: 'energie', label: 'Énergie', icon: 'fa-bolt',
      title: 'Continuité de production et maîtrise des coûts',
      rows: [
        { usecase: 'Pièces de rechange des parcs PV et éoliens', value: 'Onduleurs et modules disponibles, moins de pertes' },
        { usecase: 'Postes HTA et HTB', value: 'Transformateurs et cellules suivis et anticipés' },
        { usecase: 'O&M multi-sites en Afrique', value: 'Stock mutualisé entre centrales, délais réduits' },
        { usecase: 'Approvisionnement des chantiers EPC', value: 'Suivi du BOM prévu face au matériel livré' },
        { usecase: 'Réseaux et télécoms', value: 'Câbles et équipements localisés par dépôt' }
      ]
    },
    {
      id: 'autres', label: 'Autres industries', icon: 'fa-industry',
      title: 'La même méthode, adaptée à chaque filière',
      rows: [
        { usecase: 'Mines et phosphates', value: 'Pièces d\'usure et organes d\'engins anticipés, moins d\'arrêts d\'extraction' },
        { usecase: 'Ports et logistique', value: 'Pièces de portiques et de grues localisées, stocks de rechange mutualisés' },
        { usecase: 'Automobile', value: 'Approvisionnement bord de ligne, zéro rupture sur les références critiques' },
        { usecase: 'Agro-industrie', value: 'Gestion des dates de péremption, emballages et pièces de lignes de production' },
        { usecase: 'Pharmacie et santé', value: 'Traçabilité par lot, suivi de la chaîne du froid, conformité réglementaire' },
        { usecase: 'Ciment et BTP', value: 'Pièces de fours et de broyeurs suivies, approvisionnement des chantiers' }
      ]
    }
  ];

  projects: Project[] = [
    {
      imageUrl: '/images/ombriere-pv.jpg',
      imageSmall: '/images/ombriere-pv-1400.jpg',
      title: 'PV toitures & ombrières',
      description: 'Centrales de 100 kWc à multi-MW — études complètes de la faisabilité à l\'exploitation.',
      tags: ['Faisabilité', 'Dimensionnement', 'ROI'],
      metric: 'multi-MW',
      metricLabel: 'Puissance'
    },
    {
      imageUrl: '/images/industrie-logistique.jpg',
      imageSmall: '/images/industrie-logistique-1400.jpg',
      title: 'Industrie & logistique',
      description: 'Autoconsommation solaire intégrée aux contraintes process industriels.',
      tags: ['Autoconsommation', 'Process', 'Optimisation'],
      metric: '30%',
      metricLabel: 'Économies'
    },
    {
      imageUrl: '/images/smart-building.jpg',
      imageSmall: '/images/smart-building-1400.jpg',
      fullWidth: 2880,
      title: 'Smart building tertiaire',
      description: 'GTB, confort thermique, pilotage intelligent et sobriété énergétique.',
      tags: ['GTB/GTC', 'BIM MEP', 'Confort'],
      metric: '40%',
      metricLabel: 'Gain énergie'
    },
    {
      imageUrl: '/images/irve-hub.jpg',
      imageSmall: '/images/irve-hub-1400.jpg',
      title: 'Infrastructure IRVE',
      description: 'Hubs de recharge AC/DC avec pilotage intelligent et intégration ENR.',
      tags: ['Smart charging', 'Intégration PV', 'Réseau'],
      metric: 'AC/DC',
      metricLabel: 'Technologie'
    }
  ];
}
