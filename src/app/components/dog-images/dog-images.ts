import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BreedSearch } from '../../services/breed-search';
import { switchMap } from 'rxjs';
switchMap;

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
  ) {}

  ngOnInit() {
    // O segredo é garantir que sempre que o parâmetro mudar, a busca dispare
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
      },
      error: (err) => {
        console.error('Erro ao buscar imagens', err);
        this.images = []; // Limpa as imagens se der erro
      },
    });
  }
}
