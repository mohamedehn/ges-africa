import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Logo officiel GES Africa (image PNG transparente).
 * - theme "dark"  : version à utiliser sur fond sombre (texte et éclair en blanc)
 * - theme "light" : version couleur à utiliser sur fond clair
 */
@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a href="#" class="inline-flex items-center no-underline" aria-label="GES Africa — accueil">
      <img [src]="src" alt="GES Africa" [class]="heightClass + ' w-auto select-none'"
           width="620" height="948" decoding="async" draggable="false">
    </a>
  `
})
export class LogoComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() theme: 'light' | 'dark' = 'light';

  get src(): string {
    return this.theme === 'dark' ? '/images/logo-ges-white.png' : '/images/logo-ges.png';
  }

  get heightClass(): string {
    const sizes = { small: 'h-14', medium: 'h-16', large: 'h-20' };
    return sizes[this.size];
  }
}
