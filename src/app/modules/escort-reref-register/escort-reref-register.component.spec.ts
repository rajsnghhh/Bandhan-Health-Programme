import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscortRerefRegisterComponent } from './escort-reref-register.component';

describe('EscortRerefRegisterComponent', () => {
  let component: EscortRerefRegisterComponent;
  let fixture: ComponentFixture<EscortRerefRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscortRerefRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscortRerefRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
