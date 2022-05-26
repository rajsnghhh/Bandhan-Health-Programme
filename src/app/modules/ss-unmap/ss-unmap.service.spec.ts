import { TestBed } from '@angular/core/testing';

import { SsUnmapService } from './ss-unmap.service';

describe('SsUnmapService', () => {
  let service: SsUnmapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsUnmapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
