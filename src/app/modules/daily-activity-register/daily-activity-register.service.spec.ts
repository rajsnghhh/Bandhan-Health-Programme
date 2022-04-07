import { TestBed } from '@angular/core/testing';

import { DailyActivityRegisterService } from './daily-activity-register.service';

describe('DailyActivityRegisterService', () => {
  let service: DailyActivityRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyActivityRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
