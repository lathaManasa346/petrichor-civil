import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CommercialComponent } from './services/commercial/commercial.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferencesComponent } from './references/references.component';
import { ServicesComponent } from './services/services.component';
import { LandDevelopmentComponent } from './services/land-development/land-development.component';
import { PublicWorksComponent } from './services/public-works/public-works.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'aboutUS', component: AboutUsComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  { path: 'commercial', component: CommercialComponent },
  { path: 'landDev', component: LandDevelopmentComponent },
  { path: 'publicWorks', component: PublicWorksComponent },
  // {
  //   path: 'services',
  //   component: ServicesComponent,
  //   children: [

  //   ]
  // },
  {
    path: 'references', component: ReferencesComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
