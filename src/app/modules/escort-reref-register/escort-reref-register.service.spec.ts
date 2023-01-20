import { TestBed } from '@angular/core/testing';

import { EscortRerefRegisterService } from './escort-reref-register.service';

describe('EscortRerefRegisterService', () => {
  let service: EscortRerefRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscortRerefRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
