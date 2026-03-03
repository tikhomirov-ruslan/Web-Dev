import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDetail } from './album-detail';

describe('AlbumDetail', () => {
  let component: AlbumDetail;
  let fixture: ComponentFixture<AlbumDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
