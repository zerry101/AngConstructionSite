import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { OurProcessComponent } from './our-process/our-process.component';
import { ProjectsComponent } from './projects/projects.component';
import { RatesComponent } from './rates/rates.component';
import { WhereDoWeBuildComponent } from './where-do-we-build/where-do-we-build.component';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'projects',
        component: ProjectsComponent,
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
      },
      {
        path: 'our-process',
        component: OurProcessComponent,
      },
      {
        path: 'where-do-we-build',
        component: WhereDoWeBuildComponent,
      },
      {
        path: 'rates',
        component: RatesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
