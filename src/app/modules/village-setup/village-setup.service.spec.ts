import { TestBed } from '@angular/core/testing';

import { VillageSetupService } from './village-setup.service';

describe('VillageSetupService', () => {
  let service: VillageSetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VillageSetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
