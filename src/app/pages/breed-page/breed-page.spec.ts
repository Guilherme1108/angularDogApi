import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedPage } from './breed-page';

describe('BreedPage', () => {
  let component: BreedPage;
  let fixture: ComponentFixture<BreedPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreedPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreedPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
