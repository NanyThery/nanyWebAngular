import { Component } from '@angular/core';
import * as jobsJson from '../../assets/data/jobs.json';
import * as generalInfoJson from '../../assets/data/generalInfo.json';
import { ButtonComponent } from '../button/button.component';
import { ResumeExperienceComponent } from '../resume-experience/resume-experience.component';
import { TechnicalSkillsComponent } from '../technical-skills/technical-skills.component';
import { LanguagesComponent } from '../languages/languages.component';
import { EducationSectionComponent } from '../education-section/education-section.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    ButtonComponent,
    ResumeExperienceComponent,
    TechnicalSkillsComponent,
    LanguagesComponent,
    EducationSectionComponent,
  ],
  template: `
    <div class="resume-paper">
      <h1>Resume</h1>
      <div class="resume-content">
        <div class="resume-col">
          <app-technical-skills class="col-section" [skills]="skills" />
          <app-languages class="col-section" [languages]="languages" />
        </div>
        <div class="resume-col">
          <app-resume-experience [jobs]="jobs" class="col-section" />
          <app-education-section class="col-section" [education]="education" />
        </div>
      </div>
      <app-button title="Download CV" />
    </div>
  `,
  styles: `
    
    .resume-paper {
      display: flex;
      flex-flow: column;
      gap: 50px;
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
      gap: 36px; 
      justify-content: space-between;
    }
    .resume-col {
      display: flex; 
      flex: 1;
      flex-direction: column;
      gap: 24px; 
    }

    @media screen and (max-width: 768px) {
      .resume-content {
        flex-direction: column-reverse;
       
      }
      .resume-paper {
        padding: 20px 30px; 
        gap: 32px; 
      }
    }
  `,
})
export class ResumeComponent {
  jobs = jobsJson.jobs || null;
  languages = generalInfoJson.languages || null;
  education = generalInfoJson.studies || null;
  skills = {
    technologies: generalInfoJson.skills || [],
    otherSkills: generalInfoJson.otherSkills || [],
  };
}
