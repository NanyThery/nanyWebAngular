import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyWrapperComponent } from './body-wrapper/body-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    NavbarComponent,
    BodyWrapperComponent,
    FooterComponent,
  ],
  template: `<main class="main">
      <app-navbar />
      <app-header />
      <app-body-wrapper />
      <app-footer />
    </main>

    <router-outlet></router-outlet>`,
  styles: ``,
})
export class AppComponent {
  title = 'Nadine Thêry';
}
