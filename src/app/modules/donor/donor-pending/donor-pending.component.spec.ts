import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorPendingComponent } from './donor-pending.component';

describe('DonorPendingComponent', () => {
  let component: DonorPendingComponent;
  let fixture: ComponentFixture<DonorPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
