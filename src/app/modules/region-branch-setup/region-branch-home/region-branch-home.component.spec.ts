import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionBranchHomeComponent } from './region-branch-home.component';

describe('RegionBranchHomeComponent', () => {
  let component: RegionBranchHomeComponent;
  let fixture: ComponentFixture<RegionBranchHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionBranchHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionBranchHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
