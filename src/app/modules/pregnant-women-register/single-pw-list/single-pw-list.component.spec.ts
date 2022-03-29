import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePwListComponent } from './single-pw-list.component';

describe('SinglePwListComponent', () => {
  let component: SinglePwListComponent;
  let fixture: ComponentFixture<SinglePwListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePwListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePwListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
