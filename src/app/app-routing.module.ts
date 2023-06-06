import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './pages/home/projects/projects.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/home/contact-us/contact-us.component';
import { OurProcessComponent } from './pages/home/our-process/our-process.component';
import { WhereDoWeBuildComponent } from './pages/home/where-do-we-build/where-do-we-build.component';
import { RatesComponent } from './pages/home/rates/rates.component';



const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'contact-us', component: ContactUsComponent
  },
  {
    path: 'our-process', component: OurProcessComponent
  },
  {
    path: 'where-do-we-build', component: WhereDoWeBuildComponent
  },
  {
    path: 'rates', component: RatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
