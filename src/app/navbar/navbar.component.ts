import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div class="container">
      <nav>
        <img ngSrc="assets/logo-nt.png" height="48" width="48" />
        <div class="menu-items">
          @for (item of menuItems; track item.title) {
          <a class="menu-item" href="{{ item.link }}">{{ item.title }}</a>
          }
        </div>
      </nav>
    </div>
  `,
  styles: `
  .container {
    width: 100%; 
    display: flex; 
    justify-content: center; 
  }
  nav {
    padding: 10px 0;
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
  `,
})
export class NavbarComponent {
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
}
