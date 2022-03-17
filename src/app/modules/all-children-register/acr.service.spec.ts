import { TestBed } from '@angular/core/testing';

import { AcrService } from './acr.service';

describe('AcrService', () => {
  let service: AcrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
