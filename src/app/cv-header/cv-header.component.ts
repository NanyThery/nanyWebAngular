import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import * as generalInfo from '../../assets/data/generalInfo.json';
import {
  ionAtCircle,
  ionLogoGithub,
  ionLogoLinkedin,
} from '@ng-icons/ionicons';

@Component({
  selector: 'app-cv-header',
  standalone: true,
  imports: [NgOptimizedImage, NgIconComponent],
  providers: [provideIcons({ ionLogoGithub, ionLogoLinkedin, ionAtCircle })],
  template: `
    <div class="cv-header">
      <div class="cv-header__image">
        <img
          class="company-avatar"
          ngSrc="assets/perfil.jpg"
          width="100"
          height="100"
        />
      </div>
      <h1>Nadine Thêry</h1>
      <h4>Frontend Developer</h4>
      <div class="contact-social">
        @for(item of social; track item.type) {
        <a href="{{ item.url }}" target="_blank" class="contact-social__item">
          <ng-icon
            [name]="getIconName(item.type)"
            color="#231942"
            size="24"
          ></ng-icon>
          <span> {{ item.user }} </span>
        </a>
        }
      </div>
    </div>
  `,
  styles: `
  .cv-header {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  .cv-header__image {
    width: 100px;
    height: 100px;
    border-radius: 50%; 
    overflow: hidden;
  }
  .contact-social__item {
    display: flex; 
    align-items: center;
    gap: 8px; 
  }
  .contact-social {
    display: flex; 
    margin-top: 16px; 
    gap: 16px; 
    justify-content: space-around; 
  }
  a {
    text-decoration: none;
    color: var(--color-text-60);
  }
  
  
  `,
})
export class CvHeaderComponent {
  social = generalInfo.social;
  getIconName(name: string) {
    switch (name) {
      case 'linkedin':
        return 'ionLogoLinkedin';
      case 'github':
        return 'ionLogoGithub';
      case 'email':
        return 'ionAtCircle';
      default:
        return 'link';
    }
  }
}
