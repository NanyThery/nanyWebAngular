import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-download-btn',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <app-button
      icon="ionDownloadOutline"
      title="Download CV"
      [btnAction]="downloadCV"
    ></app-button>
  `,
  styles: ``,
})
export class DownloadBtnComponent {
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/nadine-thery-cv-2024.pdf'; // replace with the path to the file you want to download
    link.download = '2024-NadineThery-CV.pdf'; // replace with the name you want the downloaded file to have
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
