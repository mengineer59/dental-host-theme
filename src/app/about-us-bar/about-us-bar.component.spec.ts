import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsBarComponent } from './about-us-bar.component';

describe('AboutUsBarComponent', () => {
  let component: AboutUsBarComponent;
  let fixture: ComponentFixture<AboutUsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
