import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { BreedPage } from './pages/breed-page/breed-page';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dogs/:breed',
    component: BreedPage,
  },
];
