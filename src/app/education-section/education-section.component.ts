import { Component, Input } from '@angular/core';
import { EducationCardComponent } from '../education-card/education-card.component';
import { Study } from '../shared/study.interface';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [EducationCardComponent],
  template: `
    <h3>Education</h3>

    <div class="resume-experience-container">
      @for ( study of education; track $index) {
      <app-education-card [study]="study"></app-education-card>
      }
    </div>
  `,
  styles: `
    .resume-experience-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  h3 {
    margin-bottom: 16px;
  }`,
})
export class EducationSectionComponent {
  @Input() education: Study[] = [];
}
