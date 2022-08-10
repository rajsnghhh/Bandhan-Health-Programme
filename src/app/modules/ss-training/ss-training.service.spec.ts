import { TestBed } from '@angular/core/testing';

import { SsTrainingService } from './ss-training.service';

describe('SsTrainingService', () => {
  let service: SsTrainingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsTrainingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
