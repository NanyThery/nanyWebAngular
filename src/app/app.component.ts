import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  template: `<main class="main">
    <app-navbar />
    <router-outlet></router-outlet>
    <app-footer />
  </main>`,
  styles: `
   
  @media print {
    app-navbar, app-footer {
      display: none; 
    }
    
  }
  `,
})
export class AppComponent {
  title = 'Nadine Thêry';
}
