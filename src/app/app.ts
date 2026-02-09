import { Component } from '@angular/core';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeroComponent } from './components/sections/hero/hero.component';
import { TrustBarComponent } from './components/sections/trust-bar/trust-bar.component';
import { ServicesSectionComponent } from './components/sections/services/services-section.component';
import { FeaturesSectionComponent } from './components/sections/features/features-section.component';
import { MethodSectionComponent } from './components/sections/method/method-section.component';
import { ProjectsSectionComponent } from './components/sections/projects/projects-section.component';
import { CtaSectionComponent } from './components/sections/cta/cta-section.component';

@Component({
  selector: 'app-root',
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
    CtaSectionComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
