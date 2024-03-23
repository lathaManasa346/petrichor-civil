import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReferencesComponent } from './references/references.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'aboutUS', component: AboutUsComponent
  },
  {
    path: 'services', component: ServicesComponent
  },
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
