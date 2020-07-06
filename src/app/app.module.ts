import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './app/profile/profile.component';
import { AboutComponent } from './app/profile/about/about.component';
import { ContactComponent } from './app/profile/contact/contact.component';
import { EducationComponent } from './app/profile/education/education.component';
import { ExperienceComponent } from './app/profile/experience/experience.component';
import { FooterComponent } from './app/profile/footer/footer.component';
import { HeaderComponent } from './app/profile/header/header.component';
import { IntroComponent } from './app/profile/intro/intro.component';
import { ReferenceComponent } from './app/profile/reference/reference.component';
import { SkillsComponent } from './app/profile/skills/skills.component';
import { PortfolioComponent } from './app/profile/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    IntroComponent,
    ReferenceComponent,
    SkillsComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
