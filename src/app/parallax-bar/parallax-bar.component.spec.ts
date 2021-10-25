import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxBarComponent } from './parallax-bar.component';

describe('ParallaxBarComponent', () => {
  let component: ParallaxBarComponent;
  let fixture: ComponentFixture<ParallaxBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParallaxBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
