import { TestBed } from '@angular/core/testing';
import { BaselineSurveyService } from './baseline-survey.service';

describe('BaselineSurveyService', () => {
  let service: BaselineSurveyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaselineSurveyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
