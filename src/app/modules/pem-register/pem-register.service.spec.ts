import { TestBed } from '@angular/core/testing';

import { PemRegisterService } from './pem-register.service';

describe('PemRegisterService', () => {
  let service: PemRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PemRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
