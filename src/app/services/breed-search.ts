import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BreedSearch {


  async getData(breed: string) {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breed}/images`
    );

    if (!response.ok) {
      Error('Erro na requisição');
    }

    return response.json();
  }
}
