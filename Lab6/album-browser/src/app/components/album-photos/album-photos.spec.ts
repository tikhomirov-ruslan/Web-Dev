import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPhotos } from './album-photos';

describe('AlbumPhotos', () => {
  let component: AlbumPhotos;
  let fixture: ComponentFixture<AlbumPhotos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumPhotos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumPhotos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
