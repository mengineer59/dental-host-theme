import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightBarComponent } from './copyright-bar.component';

describe('CopyrightBarComponent', () => {
  let component: CopyrightBarComponent;
  let fixture: ComponentFixture<CopyrightBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyrightBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyrightBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
