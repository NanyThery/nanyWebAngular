import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgOptimizedImage],

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
    margin: 10px 10px 30px 10px;
    border-radius: 10px;  
    text-align: center;
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
  getCurrentYear() {
    return new Date().getFullYear();
  }
}
