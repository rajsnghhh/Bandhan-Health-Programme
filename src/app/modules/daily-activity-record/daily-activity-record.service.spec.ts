import { TestBed } from '@angular/core/testing';

import { DailyActivityRecordService } from './daily-activity-record.service';

describe('DailyActivityRecordService', () => {
  let service: DailyActivityRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyActivityRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
