import { Component } from '@angular/core';
// import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet> `,

  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}
  // ngOnInit() {
  //   this.spinner.show();

  //   setTimeout(() => {
  //     /** spinner ends after 5 seconds */
  //     this.spinner.hide();
  //   }, 5000);
  // }
  title = 'AngConstructionSite';
}
