import { Component } from '@angular/core';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-print-cv',
  standalone: true,
  imports: [ResumeComponent],

  template: ` <app-resume [header]="true" /> `,
  styles: ``,
})
export class PrintCvComponent {}
