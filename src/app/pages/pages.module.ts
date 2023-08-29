import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurProcessComponent } from './our-process/our-process.component';
import { ProjectsComponent } from './projects/projects.component';
import { RatesComponent } from './rates/rates.component';
import { WhereDoWeBuildComponent } from './where-do-we-build/where-do-we-build.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from '../layouts/layouts.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    OurProcessComponent,
    ProjectsComponent,
    RatesComponent,
    WhereDoWeBuildComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    LayoutsModule,
    PagesRoutingModule,
  ],
  exports: [],
})
export class PagesModule {}
