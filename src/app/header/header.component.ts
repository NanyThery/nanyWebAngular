import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <header>
      <div class="container">
        <div class="row">
          <div class="hero-text">
            <h1>Nadine Thêry</h1>
            <h2>Frontend Developer</h2>
          </div>
          <div class="hero-background">
            <div class="hero-background-layer"></div>
            <div class="hero-img-container">
              <img ngSrc="assets/header-desktop.png" fill />
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: `
  .container {
    width: 100%; 
    height: 500px; 
    display: flex; 
    justify-content: center; 
    background: white; 
    position: relative; 
  }
  .row {
    width: 100%;
    height: 100%;
    max-width: var(--max-read-length); 
    position: relative; 
    display: flex; 
  }
  .hero-text {
    
    width: 100%; 
    display: flex; 
    height: 100%;
    flex-flow: column; 
    justify-content: center;
    z-index: 2; 
  }

  .hero-background-layer {
    background-color: white;
    opacity: 0.2;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0; 
    right: 0; 
    z-index: 1;
  }

  .hero-background {
    position: absolute; 
    right: 0; 
    height: 100%;
    bottom: 0;
    display: flex; 
    justify-content: flex-end ;
    align-items: flex-end;
    width: 100%; 
    
  }

  .hero-image-container{
    height: 100%;
    width: 100%;     
  }
  img {
    object-fit: contain;
    object-position: right bottom;
    width: 100%;
    height: auto; 
    
  }

  h1 {
    font-size: 4rem;
    margin: 0; 
  }
  h2 {
    margin: 0; 
    color: var(--color-text-50)
  }

  @media (max-width: 768px) {
    .hero-background-layer {
      opacity: 0.6;
    }
    h2 {
    margin: 0; 
    color: var(--color-text-60)
  }
    .hero-text {
    text-align: center; 
    align-items: center; 
    justify-content: center;
  }

  .hero-background { 
    justify-content: center ;
  }
  }
  `,
})
export class HeaderComponent {}
