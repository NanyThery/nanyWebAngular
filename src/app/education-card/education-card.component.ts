import { Component, Input } from '@angular/core';
import { Study } from '../shared/study.interface';

@Component({
  selector: 'app-education-card',
  standalone: true,
  imports: [],
  template: `
    @if(study) {
    <div class="education-card-container">
      <div class="education-card-content">
        <div>
          <p class="bodyL bold">
            {{ study.name }}
          </p>
          <p class="education-card-secondary-text">
            <a href="{{ study.institution.url }}" target="_blank">
              {{ study.institution.name }}</a
            >
          </p>
          <p class="education-card-terciary-text">
            {{ study.startDate }} -
            {{ study.finishDate ? study.finishDate : 'current' }}
          </p>
        </div>
        @if(study.description){
        <p>{{ study.description }}</p>
        }
      </div>
    </div>
    }
  `,
  styles: `
  .education-card-container {
    display: flex; 
    width: 100%;
    
    }
    .education-card-content {
      display: flex; 
      flex-direction: column;
      flex: 1;
      gap: 12px; 
    }
    .education-card-secondary-text {
      color: var(--color-text-60)
    }
    
    .education-card-terciary-text{
      color: var(--color-text-50)
    }
    .education-card-multiple-roles{
      display: flex; 
      flex-direction: column; 
      gap: 8px; 
    }

    `,
})
export class EducationCardComponent {
  @Input() study: Study | null = null;
}
