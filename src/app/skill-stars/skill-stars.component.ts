import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionStar, ionStarHalf, ionStarOutline } from '@ng-icons/ionicons';
import { Skill } from '../shared/skill.interface';

@Component({
  selector: 'app-skill-stars',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ ionStar, ionStarOutline, ionStarHalf })],
  template: ` <div class="skill-stars-container">
    <p class="skill-stars-name">{{ skill?.name }}</p>
    <div class="skill-stars-stars">
      @for (star of stars; track $index) {
      <ng-icon [name]="star" color="#5E548E" size="16" />
      }
    </div>
  </div>`,
  styles: `
  .skill-stars-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px; 
  }
  .skill-stars-stars {
    display: flex;
    gap: 4px; 
    flex-wrap: no-wrap;
  }
  `,
})
export class SkillStarsComponent {
  @Input() skill: Skill | null = null;
  stars: string[] = [];

  buildStars(score: number): string[] {
    const stars: string[] = [];
    for (let i = 0; i < 5; i++) {
      const scoreFloor = Math.floor(score);

      if (i < score) {
        if (scoreFloor - i == 0) {
          if (score - scoreFloor < 0.5) {
            stars.push('ionStarOutline');
          } else if (score - scoreFloor >= 0.5) {
            stars.push('ionStarHalf');
          } else {
            stars.push('ionStar');
          }
        } else {
          stars.push('ionStar');
        }
      } else {
        stars.push('ionStarOutline');
      }
    }
    return stars;
  }

  ngOnInit(): void {
    this.stars = this.buildStars(this.skill?.score || 0);
  }
}
