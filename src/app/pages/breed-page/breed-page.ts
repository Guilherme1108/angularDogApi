import { Component } from '@angular/core';
import { BreedSearch } from '../../services/breed-search';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { DogImages } from '../../components/dog-images/dog-images';
@Component({
  selector: 'app-breed-page',
  imports: [DogImages, CommonModule],
  templateUrl: './breed-page.html',
  styleUrl: './breed-page.css',
})
export class BreedPage {
  constructor(
    private breedSearch: BreedSearch,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  breed!: string;

  ngOnInit() {
    const value = this.route.snapshot.paramMap.get('breed');
    if (value) {
      this.breed = value;
    }
  }

  goBack() {
    this.location.back();
  }
}
