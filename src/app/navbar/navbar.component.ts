import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgOptimizedImage],
  animations: [
    trigger('openClose', [
      state('true', style({ top: 0, left: 0 })),
      state('false', style({ top: 0, left: '-100vw' })),
      transition('true <=> false', animate(500)),
    ]),
    trigger('spinClose', [
      state('false', style({ transform: 'rotate(0deg)', opacity: 1 })),
      state('true', style({ transform: 'rotate(360deg)', opacity: 0 })),
      transition('true <=> false', animate(500)),
    ]),
    trigger('spinOnly', [
      state('false', style({ transform: 'rotate(0deg)' })),
      state('true', style({ transform: 'rotate(360deg)' })),
      transition('true <=> false', animate(500)),
    ]),
  ],
  template: `
    <div class="container">
      <nav class="menu-desktop">
        <a class="menu-logo-container" href="/">
          <img ngSrc="assets/logo-nt.png" height="48" width="48" />
        </a>
        <div class="menu-items">
          @for (item of menuItems; track item.title) {
          <a class="menu-item" href="{{ item.link }}">{{ item.title }}</a>
          }
        </div>
      </nav>
      <nav class="menu-mobile">
        <div (click)="toggleMenu()" class="menu-mobile-activator">
          <img
            [@spinClose]="isMenuOpen ? 'true' : 'false'"
            class="activator-logo logo-open"
            ngSrc="assets/logo-nt.png"
            height="48"
            width="48"
          />
          <img
            [@spinOnly]="isMenuOpen ? 'true' : 'false'"
            class="activator-logo
          logo-close"
            ngSrc="assets/close-logo.png"
            height="48"
            width="48"
          />
        </div>

        <div
          [@openClose]="isMenuOpen ? 'true' : 'false'"
          class="menu-mobile-panel"
        >
          <div class="menu-mobile-items">
            @for (item of menuItems; track item.title) {
            <a
              (click)="toggleMenu()"
              class="menu-item"
              href="{{ item.link }}"
              >{{ item.title }}</a
            >
            }
            <div class="menu-mobile-bottom-image">
              <img ngSrc="assets/show-sticker.png" fill />
            </div>
          </div>
        </div>
      </nav>
    </div>
  `,
  styles: `
  .container {
    width: 100%; 
    display: flex; 
    justify-content: center; 
    position: fixed; 
    top: 0; 
    left: 0;
    z-index: 99; 
  }
  nav {
    
    width: 100%;
    display: flex; 
    gap: 24px; 
    max-width: var(--max-read-length);
  }
  .menu-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px; 
  }
  .menu-item {
    font-size: 20px; 
    font-weight: 500; 
    color: var(--color-text-60); 
    text-decoration: none; 
    padding: 8px 16px; 
  }
  .menu-item:hover {
    background-color: var(--color-text-50);
    border-radius: 4px;
    color: var(--color-secondary); 
  }

  .menu-logo-container {
    padding: 10px; 
  }
  .menu-mobile {
    display: none;
  }

  .menu-mobile-activator {
    z-index: 2; 
    margin: 10px 15px; 
    width: 48px;
    height: 48px;
    position: relative; 
  }
  .menu-mobile-items {
    height: 100%; 
    display: flex; 
    flex-flow: column; 
    justify-content: center; 
    align-items: center; 
    gap: 24px; 
    padding: 24px;
  }
  .menu-mobile-panel {
    position: absolute; 
    top: 0;
    left: 0; 
    width: 100vw;
    height: 100vh;
    background: var(--gradient-primary);
  }
.menu-mobile-bottom-image {
  position: absolute; 
  bottom: 0; 
  left: 0; 
  width: 100%; 
  height: 150px;
  display: flex; 
  justify-content: flex-start; 
  align-items: center; 
  
}
.menu-mobile-bottom-image > img{
  object-fit: contain;
  object-position: left bottom; 
}

  .activator-logo {
    position: absolute; 
    top: 0; 
    left: 0; 
  
  }
  .logo-open {
    z-index: 1;
  }


  @media (max-width: 768px) {
    .menu-desktop {
      display: none;
    }
    .menu-mobile {
      display: flex;
    }
  }
  `,
})
export class NavbarComponent {
  isMenuOpen = false;
  menuItems = [
    {
      title: 'Resume',
      link: '#',
    },
    {
      title: 'About Me',
      link: '#',
    },
    {
      title: 'Projects',
      link: '#',
    },
    {
      title: 'Contact',
      link: '#',
    },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
