import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchVillageMapComponent } from './branch-village-map.component';

describe('BranchVillageMapComponent', () => {
  let component: BranchVillageMapComponent;
  let fixture: ComponentFixture<BranchVillageMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchVillageMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchVillageMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
