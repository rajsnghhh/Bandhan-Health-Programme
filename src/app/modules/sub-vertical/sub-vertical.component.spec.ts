import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubVerticalComponent } from './sub-vertical.component';

describe('SubVerticalComponent', () => {
  let component: SubVerticalComponent;
  let fixture: ComponentFixture<SubVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubVerticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
