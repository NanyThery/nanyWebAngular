import { Component, Input } from '@angular/core';
import { Skill } from '../shared/skill.interface';

@Component({
  selector: 'app-soft-skills-section',
  standalone: true,
  imports: [],
  template: `
    <h3>Soft Skills</h3>

    <div class="soft-skills-container">
      @for ( skill of softSkills; track skill.name) {
      <div class="soft-skill-card">
        <div class="soft-skill-title small bold">{{ skill.name }}</div>
        <div class="soft-skill-content">{{ skill.description }}</div>
      </div>
      }
    </div>
  `,
  styles: `
  h3 {
    margin-bottom: 16px;
  }
  .soft-skills-container {
    display: flex; 
    flex-direction: column;
    gap: 18px;

  }
  .soft-skill-card {
    display: flex; 
  }
  .soft-skill-title {
    max-width: 35%;
    min-width: 35%; 
  
    ;
  }
  .soft-skill-content {
    flex: 1;
    padding: 0 0 0 16px; 
    border-left: 2px solid var(--color-text-50);
  }`,
})
export class SoftSkillsSectionComponent {
  @Input() softSkills: { name: string; description: string }[] = [];
}
