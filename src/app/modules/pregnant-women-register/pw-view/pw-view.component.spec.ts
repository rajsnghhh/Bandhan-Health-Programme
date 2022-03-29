import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwViewComponent } from './pw-view.component';

describe('PwViewComponent', () => {
  let component: PwViewComponent;
  let fixture: ComponentFixture<PwViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
