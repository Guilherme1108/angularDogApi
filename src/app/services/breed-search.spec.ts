import { TestBed } from '@angular/core/testing';

import { BreedSearch } from './breed-search';

describe('BreedSearch', () => {
  let service: BreedSearch;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreedSearch);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
