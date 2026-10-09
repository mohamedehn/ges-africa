import { ChangeDetectorRef, Component, ElementRef, NgZone, OnDestroy, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../../shared/logo/logo.component';
import { MagneticDirective } from '../../../shared/directives/motion.directives';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, LogoComponent, MagneticDirective],
  template: `
    <header class="fixed top-0 inset-x-0 z-50 flex justify-center px-3 sm:px-5 pt-3 sm:pt-4 pointer-events-none">
      <nav class="nav-pill pointer-events-auto relative w-full rounded-2xl transition-all duration-700"
           [class.nav-scrolled]="scrolled"
           [class]="scrolled ? 'max-w-5xl' : 'max-w-7xl'">
        <div class="flex justify-between items-center h-16 px-4 sm:px-6">
          <app-logo size="medium" theme="dark"></app-logo>

          <!-- Menu Desktop -->
          <div class="hidden lg:flex items-center gap-1">
            <a *ngFor="let link of navLinks"
               [href]="link.href"
               (click)="navigateTo($event, link.href)"
               class="relative px-4 py-2 text-sm font-medium transition-colors duration-300"
               [class]="active === link.href ? 'text-white' : 'text-white/60 hover:text-white'">
              {{ link.label }}
              <span class="absolute left-4 right-4 -bottom-0.5 h-px bg-ges-green origin-left transition-transform duration-500"
                    [class]="active === link.href ? 'scale-x-100' : 'scale-x-0'"></span>
            </a>
          </div>

          <!-- CTA Desktop -->
          <div class="hidden lg:flex">
            <a href="#contact" appMagnetic
               (click)="navigateTo($event, '#contact')"
               class="btn-primary px-5 py-2.5 rounded-xl font-semibold text-sm inline-flex items-center gap-2">
              <i class="fas fa-paper-plane text-xs"></i>
              Demander une étude
            </a>
          </div>

          <!-- Burger -->
          <button (click)="toggleMenu()" aria-label="Menu"
                  class="lg:hidden w-11 h-11 rounded-xl text-white hover:bg-white/10 transition-colors">
            <i [class]="mobileMenuOpen ? 'fas fa-times text-xl' : 'fas fa-bars text-xl'"></i>
          </button>
        </div>

        <!-- Progression de lecture -->
        <div class="absolute bottom-0 left-5 right-5 h-px bg-white/5 overflow-hidden">
          <div #bar class="h-full bg-ges-green origin-left shadow-[0_0_10px_#7AC143]" style="transform: scaleX(0)"></div>
        </div>
      </nav>
    </header>

    <!-- Menu mobile plein écran -->
    <div *ngIf="mobileMenuOpen"
         class="lg:hidden fixed inset-0 z-40 bg-ges-dark/97 backdrop-blur-xl flex flex-col justify-center px-8">
      <div class="absolute -top-20 -right-20 w-80 h-80 bg-ges-green/10 rounded-full blur-3xl"></div>
      <a *ngFor="let link of navLinks; let i = index"
         [href]="link.href"
         (click)="navigateTo($event, link.href)"
         [style.--i]="i"
         class="menu-in font-display text-4xl font-bold text-white/90 hover:text-ges-green py-3 border-b border-white/5 transition-colors">
        {{ link.label }}
      </a>
      <a href="#contact" (click)="navigateTo($event, '#contact')" [style.--i]="navLinks.length"
         class="menu-in btn-primary mt-10 text-center px-6 py-4 rounded-xl font-semibold">
        Demander une étude
      </a>
    </div>
  `
})
export class NavigationComponent implements OnDestroy {
  @ViewChild('bar', { static: true }) bar!: ElementRef<HTMLElement>;

  mobileMenuOpen = false;
  scrolled = false;
  active = '#';

  navLinks = [
    { href: '#', label: 'Accueil' },
    { href: '#services', label: 'Expertises' },
    { href: '#features', label: 'Pourquoi nous' },
    { href: '#methode', label: 'Méthode' },
    { href: '#realisations', label: 'Réalisations' },
    { href: '#contact', label: 'Contact' }
  ];

  private cdr = inject(ChangeDetectorRef);
  private zone = inject(NgZone);
  private ticking = false;

  private onScroll = () => {
    if (this.ticking) return;
    this.ticking = true;
    requestAnimationFrame(() => {
      this.ticking = false;
      const max = document.documentElement.scrollHeight - innerHeight;
      this.bar.nativeElement.style.transform = `scaleX(${max > 0 ? Math.min(scrollY / max, 1) : 0})`;

      const scrolled = scrollY > 40;
      let active = '#';
      for (const l of this.navLinks.slice(1)) {
        const el = document.getElementById(l.href.slice(1));
        if (el && el.getBoundingClientRect().top < innerHeight * 0.4) active = l.href;
      }
      if (scrolled !== this.scrolled || active !== this.active) {
        this.scrolled = scrolled;
        this.active = active;
        this.cdr.detectChanges();
      }
    });
  };

  constructor() {
    if (typeof window !== 'undefined') {
      this.zone.runOutsideAngular(() => addEventListener('scroll', this.onScroll, { passive: true }));
    }
  }

  ngOnDestroy() {
    removeEventListener('scroll', this.onScroll);
    document.body.style.overflow = '';
  }

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : '';
  }

  navigateTo(event: Event, href: string) {
    event.preventDefault();
    this.mobileMenuOpen = false;
    document.body.style.overflow = '';
    const targetId = href.replace('#', '');
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
