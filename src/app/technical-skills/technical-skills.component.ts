import { Component, Inject, Input } from '@angular/core';
import { SkillStarsComponent } from '../skill-stars/skill-stars.component';
import { SortServiceService } from '../sort-service.service';

interface Skill {
  name: string;
  score: number;
  description?: string;
}

@Component({
  selector: 'app-technical-skills',
  standalone: true,
  imports: [SkillStarsComponent],
  template: `
    <h3>Skills</h3>
    <div class="skills-section">
      <h4>Technologies</h4>

      @for (skill of sortedSkills.technologies; track skill.name) {
      <app-skill-stars [skill]="skill" />
      }
    </div>

    <div class="skills-section">
      <h4>Tools, Platforms & Others</h4>
      @for (skill of sortedSkills.otherSkills; track skill.name) {
      <app-skill-stars [skill]="skill" />
      }
    </div>
  `,
  styles: `
  h3 {
    margin-bottom: 16px;
  }
  .skills-section {
    display: flex;
    flex-direction: column;
    gap: 12px; 
    margin-bottom: 20px;
    
  }
  `,
})
export class TechnicalSkillsComponent {
  @Input() skills: { technologies: Skill[]; otherSkills: Skill[] } = {
    technologies: [],
    otherSkills: [],
  };

  sortedSkills: { technologies: Skill[]; otherSkills: Skill[] } = {
    technologies: [],
    otherSkills: [],
  };

  // This is the constructor of the class. It runs when the component is created. This is JS class feature, not Angular's.
  //There's only one constuctor per class, and it's the place to provide the dependencies of the class (in this case, the SortServiceService).
  // A constructor would be an ideal place to inject dependencies, but not handle them. That's why we're not calling the sortSkills method here.

  constructor(private sortService: SortServiceService) {}

  // Once in the constructor, the service is available to the class through the this.sortService property.

  ngOnInit(): void {
    this.sortedSkills = {
      technologies: this.sortService.sortSkills(
        this.skills.technologies,
        'name'
      ),
      otherSkills: this.sortService.sortSkills(this.skills.otherSkills, 'name'),
    };
  }
}
