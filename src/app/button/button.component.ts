import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionDownloadOutline } from '@ng-icons/ionicons';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ ionDownloadOutline })],
  template: `
    <button [value]="value" (click)="btnAction()">
      @if(icon) {
      <ng-icon [name]="icon" size="24"></ng-icon>
      }
      {{ title }}
    </button>
  `,
  styles: `
  button {
    border: 2px solid var(--color-primary);
    background-color: transparent; 
    border-radius: 4px;
    color: var(--color-text-80);
    font-family: var(--secondary-font);
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    display: flex; 
    align-items: center; 
    gap: 8px; 
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, color 0.3s ease-in-out;
  }
  button:hover{
    background-color: var(--color-text-50);
    color: white; 
  }
  `,
})
export class ButtonComponent {
  @Input() title = 'Button';
  @Input() value = 'Button';
  @Input() icon: string | undefined;
  @Input() btnAction = () => {};
}
