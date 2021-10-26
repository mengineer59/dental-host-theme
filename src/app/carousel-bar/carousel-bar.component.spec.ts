import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBarComponent } from './carousel-bar.component';

describe('CarouselBarComponent', () => {
  let component: CarouselBarComponent;
  let fixture: ComponentFixture<CarouselBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
