import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwStatusComponent } from './pw-status.component';

describe('PwStatusComponent', () => {
  let component: PwStatusComponent;
  let fixture: ComponentFixture<PwStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
