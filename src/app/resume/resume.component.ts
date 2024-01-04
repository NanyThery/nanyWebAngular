import { Component } from '@angular/core';
import * as jobsJson from '../../assets/data/jobs.json';
import * as generalInfoJson from '../../assets/data/generalInfo.json';
import { ButtonComponent } from '../button/button.component';
import { ResumeExperienceComponent } from '../resume-experience/resume-experience.component';
import { TechnicalSkillsComponent } from '../technical-skills/technical-skills.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    ButtonComponent,
    ResumeExperienceComponent,
    TechnicalSkillsComponent,
  ],
  template: `
    <div class="resume-paper">
      <h1>Resume</h1>
      <div class="resume-content">
        <div class="resume-col">
          <app-technical-skills class="col-section" [skills]="skills" />
        </div>
        <div class="resume-col">
          <app-resume-experience [jobs]="jobs" class="col-section" />
        </div>
      </div>
      <app-button title="Download CV" />
    </div>
  `,
  styles: `
    
    .resume-paper {
      display: flex;
      flex-flow: column;
      gap: 32px;
      align-items: center;
      border-radius: 4px;  
      width: 100%; 
      max-width: var(--max-read-length);
      background-color: var(--color-white);
      padding: 30px 40px; 
    }
    .col-section{
      flex: 1; 
    }
    .resume-content {
      width: 100%;
      display: flex; 
      justify-content: space-between;
    }
    .resume-col {
      display: flex; 
      flex: 1;
      flex-direction: column;
    }

    @media screen and (max-width: 768px) {
      .resume-content {
        flex-direction: column-reverse;
       
      }
    }
  `,
})
export class ResumeComponent {
  jobs = jobsJson.jobs || [];
  skills = generalInfoJson.skills || [];
}
