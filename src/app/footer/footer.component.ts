import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import * as generalInfo from '../../assets/data/generalInfo.json';
import {
  ionAtCircle,
  ionLogoGithub,
  ionLogoLinkedin,
} from '@ng-icons/ionicons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgOptimizedImage, NgIconComponent],
  providers: [provideIcons({ ionLogoGithub, ionLogoLinkedin, ionAtCircle })],
  template: `
    <footer>
      <div class="footer-image">
        <img ngSrc="assets/sombrilla-sticker.png" width="415" height="382" />
      </div>
      <div class="footer-content">
        <div class="footer-text">
          <p>
            This website has been designed on
            <span class="bold">Figma</span> and developed with
            <span class="bold">Angular</span> and lots of ❤️🎉🐶🐶🐱
          </p>
        </div>
        <div class="footer-social">
          @for(item of social; track item.type) {
          <a href="{{ item.url }}" target="_blank">
            <ng-icon
              [name]="getIconName(item.type)"
              color="#231942"
              size="24"
            ></ng-icon>
          </a>
          }
        </div>
        <p>© {{ getCurrentYear() }} Nadine Thêry</p>
      </div>
    </footer>
  `,
  styles: `
  footer {
    width: 100%; 
    display: flex; 
    position: relative;
    overflow:hidden;
    bottom: 0;
    left:0;
  }
  footer::before {
    content: '';
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 140px; 
    background: var(--color-background-gray);
    z-index: -1
  }

  .footer-content{
    flex: 1; 
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-flow: column; 
    overflow: hidden; 
  }
  .footer-text {
    font-size: var(--font-xs); 
    padding: 0 20px; 
    background-color: rgba(255, 255, 255, 0.5);
    margin: 10px;
    border-radius: 10px;  
    text-align: center;
  }
  .footer-social {
    display: flex; 
    gap: 24px; 
  }
  .footer-content p {
    font-size: var(--font-xs)
  }
  .bold {
    font-weight: bold;
  }
  .footer-image {
    width: 200px;  
    height: 200px; 
    
  }
  .footer-image img {
    object-fit: cover;
    height: 100%;
    width: auto;  
    
  }
  

  @media (max-width: 768px) {
    .footer-image {
    width: 100px;  
    height: 200px; 
  }
  .footer-image img {
    object-position: -70px; 
  }

  footer::before {
    height: 175px; 
  }
  }
  `,
})
export class FooterComponent {
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
  getCurrentYear() {
    return new Date().getFullYear();
  }
}
