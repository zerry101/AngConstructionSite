import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurProcessComponent } from './our-process/our-process.component';
import { ProjectsComponent } from './projects/projects.component';
import { RatesComponent } from './rates/rates.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from '../layouts/layouts.module';
import { PagesRoutingModule } from './pages-routing.module';
import { CarouselComponent } from '../layouts/carousel/carousel.component';
import { OurSevicesComponent } from './our-sevices/our-sevices.component';

@NgModule({
  declarations: [
    HomeComponent,

    ContactUsComponent,
    OurProcessComponent,
    ProjectsComponent,
    RatesComponent,
    PagesComponent,
    CarouselComponent,
    OurSevicesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    LayoutsModule,
    PagesRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [],
})
export class PagesModule {}
