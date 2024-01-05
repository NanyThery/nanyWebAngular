import { Component } from '@angular/core';
import * as generalInfo from '../../assets/data/generalInfo.json';
import {
  ionAtCircle,
  ionLogoGithub,
  ionLogoLinkedin,
} from '@ng-icons/ionicons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgOptimizedImage, NgIconComponent],
  providers: [provideIcons({ ionLogoGithub, ionLogoLinkedin, ionAtCircle })],
  template: `
    <div id="contact-section" class="contact-card">
      <div class="contact-card-header">
        <h1>Contact me</h1>
        <div class="social">
          @for(item of social; track item.type) {
          <a href="{{ item.url }}" target="_blank">
            <ng-icon
              [name]="getIconName(item.type)"
              color="#231942"
              size="48"
            ></ng-icon>
          </a>
          }
        </div>
      </div>
      <div class="img-wrapper">
        <img ngSrc="assets/show-sticker.png" height="280" width="346" />
      </div>
    </div>
  `,
  styles: `
  .contact-card {
    width: 100%;
    max-width: var(--max-read-length);
    display: flex; 
    justify-content: center;
    align-items: center;
    overflow: hidden; 

  }

  
  .social {
    margin-top: 24px;
    display: flex; 
    gap: 24px; 
  }

  img {
    transform: scalex(-1);
  }
@media (max-width: 768px) {
  .contact-card {
    flex-flow: column; 
  }

  .social {
    justify-content: center;
    margin-bottom: 24px; 
  }
  img {
    width: 200px; 
    height: auto; 
  }
}

  `,
})
export class ContactComponent {
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
