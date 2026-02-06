import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { DogImages } from '../../components/dog-images/dog-images';

@Component({
  selector: 'app-breed-page',
  imports: [DogImages, CommonModule],
  templateUrl: './breed-page.html',
  styleUrl: './breed-page.css',
})
export class BreedPage {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
  
}
