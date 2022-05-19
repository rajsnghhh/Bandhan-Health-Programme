import { TestBed } from '@angular/core/testing';

import { BranchVillageMapService } from './branch-village-map.service';

describe('BranchVillageMapService', () => {
  let service: BranchVillageMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BranchVillageMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
