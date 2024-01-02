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
          <div class="hero-background">
            <div class="hero-background-layer"></div>
            <img ngSrc="assets/header-desktop.png" height="400" width="450" />
          </div>
          <div class="hero-text">
            <h1>Nadine Thêry</h1>
            <h2>Frontend Developer</h2>
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
  }
  .row {
    width: 100%;
    height: 100%;
    max-width: 800px; 
    position:relative; 
  }
  .hero-text {
    padding-top: 30px; 
    width: 100%; 
    display: flex; 
    height: 100%;
    flex-flow: column; 
    justify-content: center;
  }

  .hero-background-layer {
    background-color: var(--color-secondary);
    opacity: 0.2;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0; 
    right: 0; 
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
    z-index: -1;
  }
  h1 {
    font-size: 4rem;
    margin: 0; 
  }
  h2 {
    margin: 0; 
    color: var(--color-text-500)
  }

  @media (max-width: 768px) {
    .hero-background-layer {
      opacity: 0.5;
    }
    h2 {
    margin: 0; 
    color: var(--color-text-600)
  }
    .hero-text {
    text-align: center; 
    align-items: center; 
    justify-content: flex-start;
  }
  }
  `,
})
export class HeaderComponent {}
