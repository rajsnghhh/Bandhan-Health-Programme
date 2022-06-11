import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographicalReportHomeComponent } from './geographical-report-home.component';

describe('GeographicalReportHomeComponent', () => {
  let component: GeographicalReportHomeComponent;
  let fixture: ComponentFixture<GeographicalReportHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeographicalReportHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeographicalReportHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
