import { Component } from '@angular/core';
import { ResumeComponent } from '../resume/resume.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-body-wrapper',
  standalone: true,
  imports: [ResumeComponent, ContactComponent],
  template: `
    <div class="body-wrapper-container">
      <app-resume class="body-wrapper-section" />
      <app-contact class="body-wrapper-section" />
    </div>
  `,
  styles: `
  .body-wrapper-container {
    background: var(--gradient-primary);
    padding: 1rem; 
    
  }
.body-wrapper-section {
  display: flex;
  justify-content: center;
  margin-bottom: 30px; 
}
  `,
})
export class BodyWrapperComponent {}
