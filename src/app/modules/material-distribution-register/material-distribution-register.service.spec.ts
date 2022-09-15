import { TestBed } from '@angular/core/testing';
import { MaterialDistributionRegisterService } from './material-distribution-register.service';

describe('MaterialDistributionRegisterService', () => {
  let service: MaterialDistributionRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialDistributionRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
