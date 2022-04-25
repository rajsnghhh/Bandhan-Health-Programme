import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpSetupFormComponent } from './gp-setup-form.component';

describe('GpSetupFormComponent', () => {
  let component: GpSetupFormComponent;
  let fixture: ComponentFixture<GpSetupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpSetupFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpSetupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
