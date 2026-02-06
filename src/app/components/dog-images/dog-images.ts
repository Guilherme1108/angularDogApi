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
        this.fetchImages(breed);
      }
    });
  }

  fetchImages(breed: string) {
    this.breedSearch.getData(breed).subscribe({
      next: (response: any) => {
        this.images = response.message;
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao buscar imagens', erro);
        this.images = [];
      },
    });
  }
}
