import {Component} from '@angular/core';
import { NavigationComponent } from '../components/layout/navigation/navigation.component';
import { FooterComponent } from '../components/layout/footer/footer.component';
import { HeroComponent } from '../components/sections/hero/hero.component';
import { TrustBarComponent } from '../components/sections/trust-bar/trust-bar.component';
import { ServicesSectionComponent } from '../components/sections/services/services-section.component';
import { FeaturesSectionComponent } from '../components/sections/features/features-section.component';
import { MethodSectionComponent } from '../components/sections/method/method-section.component';
import { ProjectsSectionComponent } from '../components/sections/projects/projects-section.component';
import { ContactSectionComponent } from '../components/sections/contact/contact-section.component';
import { CtaSectionComponent } from '../components/sections/cta/cta-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavigationComponent,
    FooterComponent,
    HeroComponent,
    TrustBarComponent,
    ServicesSectionComponent,
    FeaturesSectionComponent,
    MethodSectionComponent,
    ProjectsSectionComponent,
    ContactSectionComponent,
    CtaSectionComponent
  ],
  template: `
    <app-navigation></app-navigation>
    <app-hero></app-hero>
    <app-trust-bar></app-trust-bar>
    <app-services-section></app-services-section>
    <app-features-section></app-features-section>
    <app-method-section></app-method-section>
    <app-projects-section></app-projects-section>
    <app-contact-section></app-contact-section>
    <app-cta-section></app-cta-section>
    <app-footer></app-footer>
  `
})
export class HomeComponent {}
