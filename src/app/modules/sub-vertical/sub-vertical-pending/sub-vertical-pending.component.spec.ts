import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubVerticalPendingComponent } from './sub-vertical-pending.component';

describe('SubVerticalPendingComponent', () => {
  let component: SubVerticalPendingComponent;
  let fixture: ComponentFixture<SubVerticalPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubVerticalPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubVerticalPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
