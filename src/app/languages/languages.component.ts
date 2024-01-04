import { Component, Input } from '@angular/core';
import { Skill } from '../shared/skill.interface';
import { SortServiceService } from '../sort-service.service';
import { SkillStarsComponent } from '../skill-stars/skill-stars.component';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [SkillStarsComponent],
  template: ` <div class="skills-section">
    <h3>Languages</h3>
    @for (skill of sortedLanguages; track skill.name) {
    <app-skill-stars [skill]="skill" />
    }
  </div>`,
  styles: `
  .skills-section {
    display: flex;
    flex-direction: column;
    gap: 12px; 
    margin-bottom: 20px;
    
  }
  `,
})
export class LanguagesComponent {
  @Input() languages: Skill[] = [];
  sortedLanguages: Skill[] = [];
  constructor(private sortService: SortServiceService) {}

  ngOnInit(): void {
    this.sortedLanguages = this.sortService.sortSkills(this.languages, 'score');
  }
}
