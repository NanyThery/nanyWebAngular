import { Component, Input } from '@angular/core';
import { Job } from '../shared/job.interface';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [],
  template: `
    @if(job) {
    <div class="experience-card-container">
      @if(withImage) {
      <div class="experience-card-image"></div>
      }
      <div class="experience-card-content">
        @for(role of job.roles; track role.name) {
        <p class="bodyL bold">
          {{ role.name }} ({{ role.startDate }} -
          {{ role.finishDate ? role.finishDate : 'current' }})
        </p>
        <p class="experience-card-secondary-text">
          {{ job.organization.name }}
        </p>
        <p>{{ role.description }}</p>
        <div class="experience-card-tag-wrapper">
          @for(skill of role.skills; track skill) {
          <span class="tag small">{{ skill }}</span>
          }
        </div>
        }
      </div>
    </div>
    }
  `,
  styles: `
    .experience-card-container {
      display: flex; 
      width: 100%;
      padding: 12px 0;
      }
      .experience-card-secondary-text {
        color: var(--color-text-50)
      }
      .experience-card-tag-wrapper {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
      }
      .tag {
        display: flex; 
        border-radius: 8px; 
        justify-content: center;
        padding: 5px; 
        background-color: var(--color-text-50);
        color: var(--color-white);
      }
      `,
})
export class ExperienceCardComponent {
  @Input() job: Job | null = null;
  @Input() withImage: boolean = true;
}
