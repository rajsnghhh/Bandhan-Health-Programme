import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouPendingComponent } from './mou-pending.component';

describe('MouPendingComponent', () => {
  let component: MouPendingComponent;
  let fixture: ComponentFixture<MouPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MouPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
