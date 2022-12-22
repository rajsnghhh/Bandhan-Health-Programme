import { TestBed } from '@angular/core/testing';

import { HealthForumService } from './health-forum.service';

describe('HealthForumService', () => {
  let service: HealthForumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthForumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
