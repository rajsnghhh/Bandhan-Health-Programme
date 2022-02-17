import { TestBed } from '@angular/core/testing';
import { ChildrenRegisterService } from './children-register.service';

describe('ChildrenRegisterService', () => {
  let service: ChildrenRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildrenRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
