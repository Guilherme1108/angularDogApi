import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BreedSearch } from '../../services/breed-search';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dog-images',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dog-images.html',
  styleUrl: './dog-images.css',
})
export class DogImages implements OnChanges {
  constructor(private breedSearch: BreedSearch) {}

  @Input() breed!: string;
  images: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['breed'] && this.breed)
      this.breedSearch.getData(this.breed).subscribe((response: any) => {
        this.images = response.message;
      });
  }
}
