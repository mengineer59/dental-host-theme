import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServicesBarComponent } from './our-services-bar.component';

describe('OurServicesBarComponent', () => {
  let component: OurServicesBarComponent;
  let fixture: ComponentFixture<OurServicesBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurServicesBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurServicesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
