import { AfterViewInit, Component, ElementRef, Input, NgZone, OnDestroy, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Particle { x: number; y: number; px: number; py: number; speed: number; life: number; age: number; hot: boolean; }

/**
 * Décor « énergies renouvelables » : un soleil rayonnant et des lignes de vent
 * (champ de flux) qui s'écoulent à travers l'écran. Le curseur perturbe le vent.
 */
@Component({
  selector: 'app-energy-canvas',
  standalone: true,
  imports: [CommonModule],
  host: { class: 'absolute inset-0 block pointer-events-none overflow-hidden' },
  template: `
    <!-- Soleil -->
    <div *ngIf="sun" class="absolute -top-36 -right-36 w-md h-112 md:-top-56 md:-right-52 md:w-176 md:h-176">
      <div class="absolute inset-0 rounded-full animate-sun-pulse"
           style="background: radial-gradient(circle, rgba(200,240,150,.38) 0%, rgba(122,193,67,.16) 28%, transparent 62%)"></div>
      <svg class="absolute inset-0 w-full h-full animate-spin-slower" viewBox="-100 -100 200 200" fill="none">
        <defs>
          <linearGradient id="ges-ray" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="-100">
            <stop offset="0" stop-color="#B6E67F" stop-opacity=".30"/>
            <stop offset="1" stop-color="#7AC143" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <path *ngFor="let a of rays; let i = index"
              [attr.d]="i % 2 ? 'M0 0 L-2.2 -78 L2.2 -78Z' : 'M0 0 L-3.4 -99 L3.4 -99Z'"
              [attr.transform]="'rotate(' + a + ')'" fill="url(#ges-ray)"/>
        <circle r="9" fill="#E3F6C8" fill-opacity=".9"/>
        <circle r="15" fill="#B6E67F" fill-opacity=".25"/>
      </svg>
    </div>
    <canvas #cv class="absolute inset-0 w-full h-full block"></canvas>
  `
})
export class EnergyCanvasComponent implements AfterViewInit, OnDestroy {
  @Input() density = 1;
  @Input() interactive = true;
  @Input() sun = true;
  @ViewChild('cv', { static: true }) cv!: ElementRef<HTMLCanvasElement>;

  rays = Array.from({ length: 24 }, (_, i) => i * 15);

  private zone = inject(NgZone);
  private host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private ctx!: CanvasRenderingContext2D;
  private parts: Particle[] = [];
  private w = 0;
  private h = 0;
  private dpr = 1;
  private t = 0;
  private raf = 0;
  private running = false;
  private visible = true;
  private reduced = false;
  private mouse = { x: -9999, y: -9999 };
  private io?: IntersectionObserver;

  ngAfterViewInit() {
    const ctx = this.cv.nativeElement.getContext('2d');
    if (!ctx) return;
    this.ctx = ctx;
    this.reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.resize();
    this.zone.runOutsideAngular(() => {
      addEventListener('resize', this.onResize, { passive: true });
      if (this.interactive) addEventListener('pointermove', this.onMove, { passive: true });
      document.addEventListener('visibilitychange', this.onVisibility);
      this.io = new IntersectionObserver(e => {
        this.visible = e[0].isIntersecting;
        this.visible ? this.start() : this.stop();
      });
      this.io.observe(this.host);
    });
    if (this.reduced) for (let i = 0; i < 140; i++) this.frame();
  }

  ngOnDestroy() {
    this.stop();
    this.io?.disconnect();
    removeEventListener('resize', this.onResize);
    removeEventListener('pointermove', this.onMove);
    document.removeEventListener('visibilitychange', this.onVisibility);
  }

  private onResize = () => this.resize();
  private onVisibility = () => (document.hidden ? this.stop() : this.visible && this.start());
  private onMove = (e: PointerEvent) => {
    const r = this.host.getBoundingClientRect();
    this.mouse.x = e.clientX - r.left;
    this.mouse.y = e.clientY - r.top;
  };

  private spawn(p?: Particle): Particle {
    const x = Math.random() * this.w;
    const y = Math.random() * this.h;
    const o = p ?? ({} as Particle);
    o.x = o.px = x;
    o.y = o.py = y;
    o.speed = 0.7 + Math.random() * 1.1;
    o.life = 140 + Math.random() * 220;
    o.age = 0;
    o.hot = Math.random() < 0.22;
    return o;
  }

  private resize() {
    const r = this.host.getBoundingClientRect();
    this.dpr = Math.min(devicePixelRatio || 1, 2);
    this.w = r.width;
    this.h = r.height;
    const c = this.cv.nativeElement;
    c.width = this.w * this.dpr;
    c.height = this.h * this.dpr;
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    const n = Math.max(40, Math.min(190, Math.round((this.w * this.h) / 7500 * this.density)));
    this.parts = Array.from({ length: n }, () => this.spawn());
  }

  private start() {
    if (this.running || this.reduced) return;
    this.running = true;
    this.raf = requestAnimationFrame(this.loop);
  }

  private stop() {
    this.running = false;
    cancelAnimationFrame(this.raf);
  }

  private loop = () => {
    if (!this.running) return;
    this.frame();
    this.raf = requestAnimationFrame(this.loop);
  };

  /** Direction du vent en (x, y) : courant principal vers la droite, avec ondulations. */
  private angle(x: number, y: number): number {
    const t = this.t;
    return (
      Math.sin(x * 0.0032 + t * 0.35) * 0.9 +
      Math.cos(y * 0.0045 - t * 0.28) * 0.8 +
      Math.sin((x + y) * 0.002 + t * 0.15) * 0.5 -
      0.18
    );
  }

  private frame() {
    const { ctx, w, h } = this;
    this.t += 0.012;

    // estompe les traînées existantes
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'rgba(0,0,0,0.09)';
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'source-over';
    ctx.lineCap = 'round';

    for (const p of this.parts) {
      let a = this.angle(p.x, p.y);
      const dx = p.x - this.mouse.x;
      const dy = p.y - this.mouse.y;
      const d = Math.hypot(dx, dy);
      if (d < 170) {
        // le curseur fait tourbillonner le vent autour de lui
        a = Math.atan2(dy, dx) + Math.PI / 2 * (1 - d / 170) * 1.6 + a * (d / 170);
      }
      p.px = p.x;
      p.py = p.y;
      p.x += Math.cos(a) * p.speed * 1.6;
      p.y += Math.sin(a) * p.speed * 1.6;
      p.age++;

      const fade = Math.sin(Math.min(p.age / p.life, 1) * Math.PI); // apparaît puis disparaît
      ctx.lineWidth = p.hot ? 1.8 : 1.1;
      ctx.strokeStyle = p.hot
        ? `rgba(160,225,100,${0.8 * fade})`
        : `rgba(220,240,255,${0.42 * fade})`;
      ctx.beginPath();
      ctx.moveTo(p.px, p.py);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();

      if (p.age > p.life || p.x < -30 || p.x > w + 30 || p.y < -30 || p.y > h + 30) this.spawn(p);
    }
  }
}
