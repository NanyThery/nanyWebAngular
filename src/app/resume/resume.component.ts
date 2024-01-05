import { Component, Input } from '@angular/core';
import * as jobsJson from '../../assets/data/jobs.json';
import * as generalInfoJson from '../../assets/data/generalInfo.json';
import { ButtonComponent } from '../button/button.component';
import { ResumeExperienceComponent } from '../resume-experience/resume-experience.component';
import { TechnicalSkillsComponent } from '../technical-skills/technical-skills.component';
import { LanguagesComponent } from '../languages/languages.component';
import { EducationSectionComponent } from '../education-section/education-section.component';
import { SoftSkillsSectionComponent } from '../soft-skills-section/soft-skills-section.component';
import { CvHeaderComponent } from '../cv-header/cv-header.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    ButtonComponent,
    ResumeExperienceComponent,
    TechnicalSkillsComponent,
    LanguagesComponent,
    EducationSectionComponent,
    SoftSkillsSectionComponent,
    CvHeaderComponent,
  ],
  template: `
    <div id="resume-section" class="resume-paper">
      @if (header) {
      <app-cv-header />
      } @else {
      <h1>Resume</h1>
      }

      <div class="resume-content">
        <div class="resume-col">
          <app-technical-skills [skills]="skills" />
          <app-soft-skills-section [softSkills]="softSkills" />
          <app-languages [languages]="languages" />
        </div>
        <div class="resume-col">
          <app-resume-experience [jobs]="jobs" />
          <app-education-section [education]="education" />
        </div>
      </div>
      <app-button title="Download CV" />
    </div>
  `,
  styles: `
    
    .resume-paper {
      scroll-margin-top: 60px;
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
    @media print {
      app-button {
        display: none;
      }
      app-soft-skills-section, app-education-section {
        margin-top: 30px; 
        page-break-before: always; 
      }
      .resume-paper {
        padding: 30px 60px; 
        
      }
    }
  `,
})
export class ResumeComponent {
  @Input() header: boolean = false;
  jobs = jobsJson.jobs || null;
  languages = generalInfoJson.languages || null;
  education = generalInfoJson.studies || null;
  softSkills = generalInfoJson.softSkills || null;
  skills = {
    technologies: generalInfoJson.skills || [],
    otherSkills: generalInfoJson.otherSkills || [],
  };
}
