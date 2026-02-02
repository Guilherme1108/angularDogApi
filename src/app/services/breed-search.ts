import { HttpClient, withFetch } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BreedSearch {
  constructor(private http: HttpClient) {
    withFetch;
  }

  getData(breed: string) {
    return this.http.get(`https://dog.ceo/api/breed/${breed}/images`);
  }
}
