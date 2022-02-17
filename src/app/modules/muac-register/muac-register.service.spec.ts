import { TestBed } from '@angular/core/testing';

import { MuacRegisterService } from './muac-register.service';

describe('MuacRegisterService', () => {
  let service: MuacRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuacRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
