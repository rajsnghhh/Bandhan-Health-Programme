import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmViewComponent } from './lm-view.component';

describe('LmViewComponent', () => {
  let component: LmViewComponent;
  let fixture: ComponentFixture<LmViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
