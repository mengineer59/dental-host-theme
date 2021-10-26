import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryBarComponent } from './gallery-bar.component';

describe('GalleryBarComponent', () => {
  let component: GalleryBarComponent;
  let fixture: ComponentFixture<GalleryBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
