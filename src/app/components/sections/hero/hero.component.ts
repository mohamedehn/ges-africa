import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnergyCanvasComponent } from '../../shared/energy-canvas/energy-canvas.component';
import {
  CounterDirective, MagneticDirective, ParallaxDirective, RevealDirective
} from '../../../shared/directives/motion.directives';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule, EnergyCanvasComponent, RevealDirective, CounterDirective,
    MagneticDirective, ParallaxDirective
  ],
  template: `
    <section class="bg-grain relative min-h-screen flex items-center overflow-hidden text-white">
      <!-- Fond -->
      <div class="absolute inset-0 hero-gradient"></div>
      <div class="absolute inset-0 bg-grid"></div>
      <div class="absolute -top-32 -right-32 w-136 h-136 bg-ges-green/15 rounded-full blur-[120px] animate-float-slow"></div>
      <div class="absolute -bottom-40 -left-32 w-120 h-120 bg-ges-blue/60 rounded-full blur-[120px] animate-float-slow-rev"></div>
      <!-- Photo plein format, fondue dans le fond sombre -->
      <div appReveal [revealDelay]="150" class="absolute inset-y-0 right-0 w-full lg:w-[74%]">
        <div class="absolute inset-0 overflow-hidden opacity-35 lg:opacity-100"
             style="-webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,.28) 30%, #000 64%); mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,.28) 30%, #000 64%)">
          <img appParallax="0.05"
               src="/images/centrale-solaire-hero-1600.jpg"
               srcset="/images/centrale-solaire-hero-1600.jpg 1600w, /images/centrale-solaire-hero.jpg 3840w"
               sizes="(min-width: 1024px) 1100px, 100vw"
               fetchpriority="high"
               width="3840" height="2558"
               alt="Vue aérienne d'une centrale solaire photovoltaïque au lever du jour"
               class="animate-kenburns absolute -top-[6%] left-0 w-full h-[112%] object-cover object-[64%_50%]">
        <div class="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-ges-dark/70 to-transparent"></div>
        <div class="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-ges-dark via-ges-dark/60 to-transparent"></div>
        </div>
      </div>

      <app-energy-canvas></app-energy-canvas>

      <!-- Éoliennes à l'horizon -->
      <svg class="absolute inset-x-0 bottom-0 w-full h-auto text-white/25 pointer-events-none" viewBox="0 0 1200 200"
           preserveAspectRatio="xMidYMax meet" fill="currentColor" aria-hidden="true">
        <defs>
          <g id="ges-blades">
            <path d="M0 0 L-3 -8 L0 -90 L3 -8Z"/>
            <path d="M0 0 L-3 -8 L0 -90 L3 -8Z" transform="rotate(120)"/>
            <path d="M0 0 L-3 -8 L0 -90 L3 -8Z" transform="rotate(240)"/>
            <circle r="5"/>
          </g>
        </defs>
        <!-- Collines -->
        <path d="M0 200 L0 178 Q300 158 600 176 T1200 168 L1200 200Z" fill="#1A2332" fill-opacity=".6"/>
        <!-- Éoliennes -->
        <path d="M598 184 L604 184 L603 62 L599 62Z"/>
        <g transform="translate(601 60) scale(.62)"><g class="turbine-blades" style="--spin:11s"><use href="#ges-blades"/></g></g>
        <path d="M818 178 L822 178 L821 108 L819 108Z"/>
        <g transform="translate(820 106) scale(.38)"><g class="turbine-blades" style="--spin:15s"><use href="#ges-blades"/></g></g>
        <path d="M1008 176 L1014 176 L1013 50 L1009 50Z"/>
        <g transform="translate(1011 48) scale(.7)"><g class="turbine-blades" style="--spin:12.5s"><use href="#ges-blades"/></g></g>
        <path d="M1158 170 L1162 170 L1161 98 L1159 98Z"/>
        <g transform="translate(1160 96) scale(.4)"><g class="turbine-blades" style="--spin:14s"><use href="#ges-blades"/></g></g>
      </svg>

      <div class="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-ges-dark to-transparent"></div>

      <div class="relative w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-32 pb-24">
        <div class="grid lg:grid-cols-12 gap-14 items-center">
          <!-- Texte -->
          <div class="lg:col-span-7 text-center lg:text-left">
            <div appReveal="scale"
                 class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs sm:text-sm font-medium text-ges-green mb-8">
              <span class="relative flex w-2 h-2 shrink-0">
                <span class="absolute inset-0 rounded-full bg-ges-green animate-ping"></span>
                <span class="relative w-2 h-2 rounded-full bg-ges-green"></span>
              </span>
              <span>Bureau d'études — Afrique &middot; Europe &middot; MENA</span>
            </div>

            <h1 appReveal="lines"
                class="font-display font-bold tracking-tight leading-[1.04] text-[2.6rem] sm:text-6xl xl:text-7xl mb-8">
              <span class="line"><span style="--d:0">Accélérateur</span></span>
              <span class="line"><span style="--d:1">de la transition</span></span>
              <span class="line"><span style="--d:2" class="gradient-text">énergétique</span></span>
              <span class="line"><span style="--d:3">intelligente</span></span>
            </h1>

            <p appReveal [revealDelay]="500"
               class="text-base sm:text-lg md:text-xl text-white/65 mb-10 max-w-xl leading-relaxed mx-auto lg:mx-0">
              Ingénierie ENR, BIM et Smart Building — de la stratégie à l'exploitation.
              Des livrables fiables, conformes et orientés performance.
            </p>

            <div appReveal [revealDelay]="650"
                 class="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 justify-center lg:justify-start">
              <a href="#contact" appMagnetic
                 class="btn-primary px-8 py-4 rounded-xl font-semibold text-center text-base sm:text-lg inline-flex items-center justify-center gap-3 group">
                Demander une étude
                <i class="fas fa-arrow-right text-sm transition-transform duration-300 group-hover:translate-x-1.5"></i>
              </a>
              <a href="#services" appMagnetic
                 class="btn-outline px-8 py-4 rounded-xl font-semibold text-center text-base sm:text-lg inline-flex items-center justify-center gap-2">
                Découvrir nos expertises
              </a>
            </div>

            <div appReveal [revealDelay]="800"
                 class="flex items-center gap-6 sm:gap-10 pt-6 border-t border-white/10 justify-center lg:justify-start">
              <div>
                <div class="font-display text-3xl sm:text-4xl font-bold"><span [appCounter]="5" suffix="+">5+</span></div>
                <div class="text-[0.65rem] sm:text-xs text-white/50 uppercase tracking-widest mt-1">Expertises</div>
              </div>
              <div class="w-px h-10 sm:h-12 bg-white/10"></div>
              <div>
                <div class="font-display text-3xl sm:text-4xl font-bold"><span [appCounter]="3">3</span></div>
                <div class="text-[0.65rem] sm:text-xs text-white/50 uppercase tracking-widest mt-1">Continents</div>
              </div>
              <div class="w-px h-10 sm:h-12 bg-white/10"></div>
              <div>
                <div class="font-display text-3xl sm:text-4xl font-bold text-ges-green"><span [appCounter]="100" suffix="%">100%</span></div>
                <div class="text-[0.65rem] sm:text-xs text-white/50 uppercase tracking-widest mt-1">Indépendant</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Carte flottante -->
      <div appReveal="scale" [revealDelay]="900" class="hidden lg:block absolute bottom-32 right-10 xl:right-20 z-10">
        <div class="glass rounded-2xl p-4 text-white animate-float-y shadow-2xl" style="background: rgba(26,35,50,.68)">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 bg-ges-green/20 rounded-xl flex items-center justify-center">
              <i class="fas fa-bolt text-ges-green"></i>
            </div>
            <div>
              <div class="text-sm font-bold">Performance prouvable</div>
              <div class="text-xs text-white/60">kWh, ROI, M&V</div>
            </div>
            <div class="flex items-end gap-0.5 h-8 ml-2">
              <span class="eq-bar w-1 h-full bg-ges-green rounded-full" style="animation-delay:0s"></span>
              <span class="eq-bar w-1 h-full bg-ges-green rounded-full" style="animation-delay:.25s"></span>
              <span class="eq-bar w-1 h-full bg-ges-green rounded-full" style="animation-delay:.5s"></span>
              <span class="eq-bar w-1 h-full bg-ges-green rounded-full" style="animation-delay:.75s"></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Indicateur de scroll -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 w-px h-14 bg-white/15 overflow-hidden scroll-cue"></div>
    </section>
  `
})
export class HeroComponent { }
