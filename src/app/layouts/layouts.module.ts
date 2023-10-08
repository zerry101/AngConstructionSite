import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ScrollTopComponent],
  imports: [RouterModule, CommonModule],
  exports: [HeaderComponent, FooterComponent, ScrollTopComponent],
})
export class LayoutsModule {}
