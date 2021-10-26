import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTeamBarComponent } from './our-team-bar.component';

describe('OurTeamBarComponent', () => {
  let component: OurTeamBarComponent;
  let fixture: ComponentFixture<OurTeamBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurTeamBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurTeamBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
