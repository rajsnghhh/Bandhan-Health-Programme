import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsTrainingComponent } from './ss-training.component';

describe('SsTrainingComponent', () => {
  let component: SsTrainingComponent;
  let fixture: ComponentFixture<SsTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
