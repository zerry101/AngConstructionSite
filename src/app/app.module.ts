import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/home/projects/projects.component';
import { WhereDoWeBuildComponent } from './pages/home/where-do-we-build/where-do-we-build.component';
import { OurProcessComponent } from './pages/home/our-process/our-process.component';
import { RatesComponent } from './pages/home/rates/rates.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    WhereDoWeBuildComponent,
    OurProcessComponent,
    RatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
