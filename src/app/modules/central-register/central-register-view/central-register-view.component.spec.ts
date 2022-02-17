import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralRegisterViewComponent } from './central-register-view.component';

describe('CentralRegisterViewComponent', () => {
  let component: CentralRegisterViewComponent;
  let fixture: ComponentFixture<CentralRegisterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralRegisterViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralRegisterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
