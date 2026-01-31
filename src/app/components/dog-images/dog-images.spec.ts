import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogImages } from './dog-images';

describe('DogImages', () => {
  let component: DogImages;
  let fixture: ComponentFixture<DogImages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogImages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogImages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
