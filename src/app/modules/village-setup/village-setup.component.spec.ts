import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageSetupComponent } from './village-setup.component';

describe('VillageSetupComponent', () => {
  let component: VillageSetupComponent;
  let fixture: ComponentFixture<VillageSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
