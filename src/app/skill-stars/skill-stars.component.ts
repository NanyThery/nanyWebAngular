import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionStar, ionStarHalf, ionStarOutline } from '@ng-icons/ionicons';
import { faCircle } from '@ng-icons/font-awesome/regular';
import {
  faSolidCircle,
  faSolidCircleHalfStroke,
} from '@ng-icons/font-awesome/solid';

import { Skill } from '../shared/skill.interface';

@Component({
  selector: 'app-skill-stars',
  standalone: true,
  imports: [NgIconComponent],
  providers: [
    provideIcons({
      ionStar,
      ionStarOutline,
      ionStarHalf,
      faCircle,
      faSolidCircle,
      faSolidCircleHalfStroke,
    }),
  ],
  template: ` <div class="skill-stars-container">
    <p class="skill-stars-name">{{ skill?.name }}</p>
    <div class="skill-stars-stars">
      @for (star of stars; track $index) {
      <ng-icon [name]="star" color="#9f86c0" size="12" />
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
    flex-wrap: nowrap;
  }
  ng-icon {
    display: flex; 
  }
  `,
})
export class SkillStarsComponent {
  @Input() skill: Skill | null = null;
  @Input() variant: 'circle' | 'star' = 'star';
  stars: string[] = [];

  buildStars(score: number): string[] {
    const stars: string[] = [];
    for (let i = 0; i < 5; i++) {
      const scoreFloor = Math.floor(score);

      if (i < score) {
        if (scoreFloor - i == 0) {
          if (score - scoreFloor < 0.5) {
            this.variant == 'star'
              ? stars.push('ionStarOutline')
              : stars.push('faCircle');
          } else if (score - scoreFloor >= 0.5) {
            this.variant == 'star'
              ? stars.push('ionStarHalf')
              : stars.push('faSolidCircleHalfStroke');
          } else {
            this.variant == 'star'
              ? stars.push('ionStar')
              : stars.push('faSolidCircle');
          }
        } else {
          this.variant == 'star'
            ? stars.push('ionStar')
            : stars.push('faSolidCircle');
        }
      } else {
        this.variant == 'star'
          ? stars.push('ionStarOutline')
          : stars.push('faCircle');
      }
    }
    return stars;
  }

  ngOnInit(): void {
    this.stars = this.buildStars(this.skill?.score || 0);
  }
}
