import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
// import { NgxSpinnerModule } from 'ngx-spinner';

// const ngxUiLoaderConfig: NgxSpinnerConfig = { type: 'line-scale-party' };

// import {} from '@angular/material/progress-bar'
@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // FooterComponent,
  ],
  imports: [
    BrowserAnimationsModule,

    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
