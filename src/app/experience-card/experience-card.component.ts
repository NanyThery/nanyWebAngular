import { Component, Input } from '@angular/core';
import { Job } from '../shared/job.interface';
import { NgOptimizedImage } from '@angular/common';
import { NgIconComponent, NgIconsModule, provideIcons } from '@ng-icons/core';
import { ionBusinessOutline } from '@ng-icons/ionicons';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [NgOptimizedImage, NgIconComponent],
  providers: [provideIcons({ ionBusinessOutline })],
  template: `
    @if(job) {
    <div class="experience-card-container">
      @if(withImage) {
      <div class="experience-card-image">
        @if(job.organization.logo) {
        <img
          class="company-avatar"
          ngSrc="{{ job.organization.logo }}"
          width="50"
          height="50"
        />} @else {
        <div class="company-avatar">
          <ng-icon
            name="ionBusinessOutline"
            size="30"
            color="#231942"
          ></ng-icon>
        </div>
        }
      </div>
      }
      <div class="experience-card-content">
        @for(role of job.roles; track role.name) {
        <div>
          <p class="bodyL bold">
            {{ role.name }}
          </p>
          <p class="experience-card-secondary-text">
            {{ job.organization.name }}
          </p>
          <p class="experience-card-terciary-text">
            {{ role.startDate }} -
            {{ role.finishDate ? role.finishDate : 'current' }}
          </p>
        </div>
        @if(role.description){
        <p>{{ role.description }}</p>
        } @if(role.skills?.length){
        <div class="experience-card-tag-wrapper">
          @for(skill of role.skills; track skill) {
          <span class="tag small">{{ skill }}</span>
          }
        </div>
        } }
      </div>
    </div>
    }
  `,
  styles: `
    .experience-card-container {
      display: flex; 
      width: 100%;
      
      }
      .experience-card-content {
        display: flex; 
        flex-direction: column;
        flex: 1;
        gap: 12px; 
      }
      .experience-card-secondary-text {
        color: var(--color-text-60)
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
        padding: 3px 4px; 
        background-color: var(--color-text-50);
        color: var(--color-white);
      }
      .experience-card-image {
        margin-right: 12px; 
      }
      .company-avatar {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: var(--color-background-gray);
        border: 1px solid var(--color-background-gray);
        overflow: hidden; 
        border-radius: 50%;
      }
      .experience-card-terciary-text{
        color: var(--color-text-50)
      }
      .experience-card-multiple-roles{
        display: flex; 
        flex-direction: column; 
        gap: 8px; 
      }
      .experience-card-multiple-roles > div {
        margin-left: 12px; 
      }
      `,
})
export class ExperienceCardComponent {
  @Input() job: Job | null = null;
  @Input() withImage: boolean = true;
  @Input() notDetailed: boolean = false;
}
