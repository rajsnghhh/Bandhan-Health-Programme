import { TestBed } from '@angular/core/testing';

import { CentralRegisterService } from './central-register.service';

describe('CentralRegisterService', () => {
  let service: CentralRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentralRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
