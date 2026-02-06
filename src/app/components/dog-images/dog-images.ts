import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BreedSearch } from '../../services/breed-search';

@Component({
  selector: 'app-dog-images',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dog-images.html',
  styleUrl: './dog-images.css',
})
export class DogImages implements OnInit {
  images: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private breedSearch: BreedSearch,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    
    this.route.params.subscribe((params) => {
      const breed = params['breed']; // Pega o nome da raça da URL
      if (breed) {
        this.carregarImagens(breed);
      }
    });
  }

  async carregarImagens(breed: string) {
    const data = await this.breedSearch.getData(breed);
    this.images = data.message;
    this.cdr.detectChanges();
  }
}
