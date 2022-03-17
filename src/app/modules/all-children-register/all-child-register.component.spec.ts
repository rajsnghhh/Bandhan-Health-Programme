import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllChildRegisterComponent } from './all-child-register.component';

describe('AllChildRegisterComponent', () => {
  let component: AllChildRegisterComponent;
  let fixture: ComponentFixture<AllChildRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllChildRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllChildRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
