import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReferencesComponent } from './references/references.component';
import { ProjectsComponent } from './projects/projects.component';
import { CommercialComponent } from './services/commercial/commercial.component';
import { LandDevelopmentComponent } from './services/land-development/land-development.component';
import { PublicWorksComponent } from './services/public-works/public-works.component';
import { PorfolioComponent } from './porfolio/porfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    HeaderComponent,
    NotFoundComponent,
    ReferencesComponent,
    ProjectsComponent,
    CommercialComponent,
    LandDevelopmentComponent,
    PublicWorksComponent,
    PorfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
