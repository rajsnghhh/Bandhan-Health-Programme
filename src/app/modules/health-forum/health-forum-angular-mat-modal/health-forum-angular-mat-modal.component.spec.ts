import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthForumAngularMatModalComponent } from './health-forum-angular-mat-modal.component';

describe('HealthForumAngularMatModalComponent', () => {
  let component: HealthForumAngularMatModalComponent;
  let fixture: ComponentFixture<HealthForumAngularMatModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthForumAngularMatModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthForumAngularMatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
