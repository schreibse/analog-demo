import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'analog-demo-home',
  
  imports: [AnalogWelcomeComponent],
  template: `
     <analog-demo-analog-welcome/>
  `,
})
export default class HomeComponent {
}
