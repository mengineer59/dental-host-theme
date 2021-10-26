import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionBarComponent } from './introduction-bar.component';

describe('IntroductionBarComponent', () => {
  let component: IntroductionBarComponent;
  let fixture: ComponentFixture<IntroductionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroductionBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
