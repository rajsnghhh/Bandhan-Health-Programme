import { TestBed } from '@angular/core/testing';

import { DistrictSetupService } from './district-setup.service';

describe('DistrictSetupService', () => {
  let service: DistrictSetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistrictSetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
