import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwHistoryComponent } from './pw-history.component';

describe('PwHistoryComponent', () => {
  let component: PwHistoryComponent;
  let fixture: ComponentFixture<PwHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
