import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyActivityRegisterComponent } from './daily-activity-register.component';

describe('DailyActivityRegisterComponent', () => {
  let component: DailyActivityRegisterComponent;
  let fixture: ComponentFixture<DailyActivityRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyActivityRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyActivityRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
