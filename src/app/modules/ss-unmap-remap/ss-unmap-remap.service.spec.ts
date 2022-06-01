import { TestBed } from '@angular/core/testing';

import { SsUnmapRemapService } from './ss-unmap-remap.service';

describe('SsUnmapRemapService', () => {
  let service: SsUnmapRemapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsUnmapRemapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
