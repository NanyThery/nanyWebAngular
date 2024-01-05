import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BodyWrapperComponent } from '../body-wrapper/body-wrapper.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BodyWrapperComponent],
  template: `
    <app-header />
    <app-body-wrapper />
  `,
  styles: ``,
})
export class HomeComponent {}
