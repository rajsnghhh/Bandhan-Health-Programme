import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralRegisterCreateComponent } from './central-register-create.component';

describe('CentralRegisterCreateComponent', () => {
  let component: CentralRegisterCreateComponent;
  let fixture: ComponentFixture<CentralRegisterCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralRegisterCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralRegisterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
