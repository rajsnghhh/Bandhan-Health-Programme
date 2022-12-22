import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthForumComponent } from './health-forum.component';

describe('HealthForumComponent', () => {
  let component: HealthForumComponent;
  let fixture: ComponentFixture<HealthForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
