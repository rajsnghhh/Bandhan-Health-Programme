import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyActivityRecordComponent } from './daily-activity-record.component';

describe('DailyActivityRecordComponent', () => {
  let component: DailyActivityRecordComponent;
  let fixture: ComponentFixture<DailyActivityRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyActivityRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyActivityRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
