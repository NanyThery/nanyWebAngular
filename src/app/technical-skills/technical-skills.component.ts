import { Component, Input } from '@angular/core';

interface Skill {
  name: string;
  score: number;
  description?: string;
}

@Component({
  selector: 'app-technical-skills',
  standalone: true,
  imports: [],
  template: `
    <h3>Skills</h3>
    <h4>Technologies</h4>
  `,
  styles: ``,
})
export class TechnicalSkillsComponent {
  @Input() skills: Skill[] = [];
}
