import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponentPage} from './landing.component';
import { IonicModule } from "@ionic/angular";
import { BeritaComponentPage } from "@pages/landing/berita/berita.component";
import { AppLoginFormComponent } from "@pages/landing/login-form/app-login-form.component";
import { LogoComponent } from "@pages/landing/logo/logo.component";
import { HeroesComponent } from "@pages/landing/heroes/heroes.component";

@NgModule({
  declarations: [
    LandingComponentPage,
    BeritaComponentPage,
    AppLoginFormComponent,
    LogoComponent,
    HeroesComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class LandingModule {
}
