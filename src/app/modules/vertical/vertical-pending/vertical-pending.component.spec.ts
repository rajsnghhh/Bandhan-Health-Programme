import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalPendingComponent } from './vertical-pending.component';

describe('VerticalPendingComponent', () => {
  let component: VerticalPendingComponent;
  let fixture: ComponentFixture<VerticalPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
