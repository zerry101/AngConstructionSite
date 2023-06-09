import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { OurProcessComponent } from './home/our-process/our-process.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { RatesComponent } from './home/rates/rates.component';
import { WhereDoWeBuildComponent } from './home/where-do-we-build/where-do-we-build.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    OurProcessComponent,
    ProjectsComponent,
    RatesComponent,
    WhereDoWeBuildComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[

  ]
})
export class PagesModule { }
