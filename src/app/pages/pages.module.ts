import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurProcessComponent } from './our-process/our-process.component';
import { ProjectsComponent } from './projects/projects.component';
import { RatesComponent } from './rates/rates.component';
import { WhereDoWeBuildComponent } from './where-do-we-build/where-do-we-build.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    OurProcessComponent,
    ProjectsComponent,
    RatesComponent,
    WhereDoWeBuildComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [],
})
export class PagesModule {}
