import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographicalStateWiseComponent } from './geographical-state-wise.component';

describe('GeographicalStateWiseComponent', () => {
  let component: GeographicalStateWiseComponent;
  let fixture: ComponentFixture<GeographicalStateWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeographicalStateWiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeographicalStateWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
