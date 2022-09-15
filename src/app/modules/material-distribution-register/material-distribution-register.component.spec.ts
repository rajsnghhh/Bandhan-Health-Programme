import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDistributionRegisterComponent } from './material-distribution-register.component';

describe('MaterialDistributionRegisterComponent', () => {
  let component: MaterialDistributionRegisterComponent;
  let fixture: ComponentFixture<MaterialDistributionRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialDistributionRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDistributionRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
