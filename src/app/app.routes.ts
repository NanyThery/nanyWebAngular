import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrintCvComponent } from './print-cv/print-cv.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Nadine Thêry',
  },
  {
    path: 'print-cv',
    component: PrintCvComponent,
    title: 'Nadine Thêry - CV',
  },
];
