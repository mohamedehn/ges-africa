import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { MentionsLegalesComponent } from './pages/mentions-legales.component';
import { PolitiqueConfidentialiteComponent } from './pages/politique-confidentialite.component';
import { CookiesComponent } from './pages/cookies.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mentions-legales', component: MentionsLegalesComponent },
  { path: 'politique-confidentialite', component: PolitiqueConfidentialiteComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: '**', redirectTo: '' }
];
