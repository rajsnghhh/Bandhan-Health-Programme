import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwRegisterComponent } from './pw-register.component';

describe('PwRegisterComponent', () => {
  let component: PwRegisterComponent;
  let fixture: ComponentFixture<PwRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
