import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPendingComponent } from './project-pending.component';

describe('ProjectPendingComponent', () => {
  let component: ProjectPendingComponent;
  let fixture: ComponentFixture<ProjectPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
