import { Directive, ElementRef, Input, NgZone, OnDestroy, OnInit, inject } from '@angular/core';

const prefersReducedMotion = () =>
  typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

const finePointer = () =>
  typeof matchMedia !== 'undefined' && matchMedia('(hover: hover) and (pointer: fine)').matches;

/** Révèle l'élément à l'entrée dans le viewport. Variantes : '', 'left', 'right', 'scale', 'lines'. */
@Directive({ selector: '[appReveal]', standalone: true })
export class RevealDirective implements OnInit, OnDestroy {
  @Input('appReveal') variant = '';
  @Input() revealDelay = 0;

  private el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private io?: IntersectionObserver;

  ngOnInit() {
    const el = this.el;
    if (this.variant === 'lines') {
      el.classList.add('reveal-lines');
    } else {
      el.classList.add('reveal');
      if (this.variant) el.classList.add('reveal-' + this.variant);
    }
    if (this.revealDelay) el.style.transitionDelay = this.revealDelay + 'ms';

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-in');
      return;
    }
    this.io = new IntersectionObserver(
      entries => {
        if (entries.some(e => e.isIntersecting)) {
          el.classList.add('is-in');
          // libère le délai pour ne pas ralentir les effets de survol ensuite
          setTimeout(() => (el.style.transitionDelay = ''), 2000);
          this.io?.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    this.io.observe(el);
  }

  ngOnDestroy() {
    this.io?.disconnect();
  }
}

/** Compteur animé : <span [appCounter]="30" suffix="%">30%</span> */
@Directive({ selector: '[appCounter]', standalone: true })
export class CounterDirective implements OnInit, OnDestroy {
  @Input('appCounter') target = 0;
  @Input() suffix = '';
  @Input() prefix = '';
  @Input() duration = 1800;

  private el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private io?: IntersectionObserver;
  private raf = 0;

  ngOnInit() {
    const render = (v: number) => (this.el.textContent = this.prefix + Math.round(v) + this.suffix);
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      render(this.target);
      return;
    }
    render(0);
    this.io = new IntersectionObserver(entries => {
      if (!entries.some(e => e.isIntersecting)) return;
      this.io?.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / this.duration, 1);
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        render(this.target * eased);
        if (t < 1) this.raf = requestAnimationFrame(tick);
      };
      this.raf = requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    this.io.observe(this.el);
  }

  ngOnDestroy() {
    this.io?.disconnect();
    cancelAnimationFrame(this.raf);
  }
}

/** Halo lumineux qui suit le curseur (utilise la classe .spot). */
@Directive({ selector: '[appSpotlight]', standalone: true })
export class SpotlightDirective implements OnInit, OnDestroy {
  private el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private zone = inject(NgZone);
  private handler = (e: PointerEvent) => {
    const r = this.el.getBoundingClientRect();
    this.el.style.setProperty('--mx', e.clientX - r.left + 'px');
    this.el.style.setProperty('--my', e.clientY - r.top + 'px');
  };

  ngOnInit() {
    this.el.classList.add('spot');
    if (!finePointer()) return;
    this.zone.runOutsideAngular(() => this.el.addEventListener('pointermove', this.handler));
  }

  ngOnDestroy() {
    this.el.removeEventListener('pointermove', this.handler);
  }
}

/** Inclinaison 3D suivant la souris. */
@Directive({ selector: '[appTilt]', standalone: true })
export class TiltDirective implements OnInit, OnDestroy {
  @Input('appTilt') max: number | string = 8;

  private el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private zone = inject(NgZone);
  private move = (e: PointerEvent) => {
    const r = this.el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    const m = Number(this.max) || 8;
    this.el.style.transform = `perspective(1000px) rotateX(${(-y * m).toFixed(2)}deg) rotateY(${(x * m).toFixed(2)}deg)`;
  };
  private leave = () => (this.el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)');

  ngOnInit() {
    if (!finePointer() || prefersReducedMotion()) return;
    this.el.style.transition = 'transform .5s cubic-bezier(.16,1,.3,1)';
    this.el.style.willChange = 'transform';
    this.zone.runOutsideAngular(() => {
      this.el.addEventListener('pointermove', this.move);
      this.el.addEventListener('pointerleave', this.leave);
    });
  }

  ngOnDestroy() {
    this.el.removeEventListener('pointermove', this.move);
    this.el.removeEventListener('pointerleave', this.leave);
  }
}

/** Effet magnétique sur les boutons. */
@Directive({ selector: '[appMagnetic]', standalone: true })
export class MagneticDirective implements OnInit, OnDestroy {
  private el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private zone = inject(NgZone);
  private move = (e: PointerEvent) => {
    const r = this.el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    this.el.style.translate = `${dx * 0.22}px ${dy * 0.3}px`;
  };
  private leave = () => (this.el.style.translate = '0 0');

  ngOnInit() {
    if (!finePointer() || prefersReducedMotion()) return;
    this.el.style.transition = 'translate .4s cubic-bezier(.16,1,.3,1), background .3s, box-shadow .3s';
    this.zone.runOutsideAngular(() => {
      this.el.addEventListener('pointermove', this.move);
      this.el.addEventListener('pointerleave', this.leave);
    });
  }

  ngOnDestroy() {
    this.el.removeEventListener('pointermove', this.move);
    this.el.removeEventListener('pointerleave', this.leave);
  }
}

/** Expose --p (0 → 1) sur l'élément selon sa progression dans le viewport. */
@Directive({ selector: '[appScrollProgress]', standalone: true })
export class ScrollProgressDirective implements OnInit, OnDestroy {
  private el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private zone = inject(NgZone);
  private raf = 0;
  private update = () => {
    cancelAnimationFrame(this.raf);
    this.raf = requestAnimationFrame(() => {
      const r = this.el.getBoundingClientRect();
      const p = Math.min(Math.max((innerHeight * 0.72 - r.top) / r.height, 0), 1);
      this.el.style.setProperty('--p', p.toFixed(4));
    });
  };

  ngOnInit() {
    if (prefersReducedMotion()) {
      this.el.style.setProperty('--p', '1');
      return;
    }
    this.zone.runOutsideAngular(() => {
      addEventListener('scroll', this.update, { passive: true });
      addEventListener('resize', this.update, { passive: true });
    });
    this.update();
  }

  ngOnDestroy() {
    removeEventListener('scroll', this.update);
    removeEventListener('resize', this.update);
    cancelAnimationFrame(this.raf);
  }
}

/** Parallaxe verticale (propriété CSS `translate`, compatible avec scale/transform). */
@Directive({ selector: '[appParallax]', standalone: true })
export class ParallaxDirective implements OnInit, OnDestroy {
  @Input('appParallax') speed: number | string = 0.12;

  private el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private zone = inject(NgZone);
  private raf = 0;
  private update = () => {
    cancelAnimationFrame(this.raf);
    this.raf = requestAnimationFrame(() => {
      const r = this.el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > innerHeight + 200) return;
      const offset = (r.top + r.height / 2 - innerHeight / 2) * -(Number(this.speed) || 0.12);
      this.el.style.translate = `0 ${offset.toFixed(1)}px`;
    });
  };

  ngOnInit() {
    if (prefersReducedMotion()) return;
    this.zone.runOutsideAngular(() => addEventListener('scroll', this.update, { passive: true }));
    this.update();
  }

  ngOnDestroy() {
    removeEventListener('scroll', this.update);
    cancelAnimationFrame(this.raf);
  }
}

export const MOTION_DIRECTIVES = [
  RevealDirective,
  CounterDirective,
  SpotlightDirective,
  TiltDirective,
  MagneticDirective,
  ScrollProgressDirective,
  ParallaxDirective
] as const;
