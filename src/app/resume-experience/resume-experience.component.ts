import { Component, Input } from '@angular/core';
import { Job } from '../shared/job.interface';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resume-experience',
  standalone: true,
  imports: [ExperienceCardComponent],
  template: `
    <h3>Experience</h3>

    <div class="resume-experience-container">
      @if (isPrintView) { @for ( job of jobs.dev; track $index) { @if(job.print
      === true) {
      <app-experience-card [job]="job"></app-experience-card> } } @for ( job of
      jobs.notDev; track $index) { @if(job.print === true) {
      <app-experience-card [job]="job"></app-experience-card>
      }} } @else { @for ( job of jobs.dev; track $index) {

      <app-experience-card [job]="job"></app-experience-card>
      } @for ( job of jobs.notDev; track $index) {
      <app-experience-card [job]="job"></app-experience-card>
      } }
    </div>
  `,
  styles: `
  .resume-experience-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  h3 {
    margin-bottom: 16px;
  }
  `,
})
export class ResumeExperienceComponent {
  @Input() jobs: { dev: Job[]; notDev: Job[] } = { dev: [], notDev: [] };
  isPrintView = false;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.url.subscribe((url) => {
      if (url[0]?.path === 'print-cv') {
        this.isPrintView = true;
      }
    });
  }
}
