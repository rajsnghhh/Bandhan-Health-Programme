import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemRegisterCreateComponent } from './pem-register-create.component';

describe('PemRegisterCreateComponent', () => {
  let component: PemRegisterCreateComponent;
  let fixture: ComponentFixture<PemRegisterCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PemRegisterCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PemRegisterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
