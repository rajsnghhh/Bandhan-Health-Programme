import { TestBed } from '@angular/core/testing';

import { SubVerticalService } from './sub-vertical.service';

describe('SubVerticalService', () => {
  let service: SubVerticalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubVerticalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
