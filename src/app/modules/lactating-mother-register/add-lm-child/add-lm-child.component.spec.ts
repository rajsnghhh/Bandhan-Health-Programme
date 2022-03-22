import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLmChildComponent } from './add-lm-child.component';

describe('AddLmChildComponent', () => {
  let component: AddLmChildComponent;
  let fixture: ComponentFixture<AddLmChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLmChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLmChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
