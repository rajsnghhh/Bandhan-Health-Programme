import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuacRegisterCreateComponent } from './muac-register-create.component';

describe('MuacRegisterCreateComponent', () => {
  let component: MuacRegisterCreateComponent;
  let fixture: ComponentFixture<MuacRegisterCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuacRegisterCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuacRegisterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
