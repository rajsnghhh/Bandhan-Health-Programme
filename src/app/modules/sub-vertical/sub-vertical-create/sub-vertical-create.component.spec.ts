import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubVerticalCreateComponent } from './sub-vertical-create.component';

describe('SubVerticalCreateComponent', () => {
  let component: SubVerticalCreateComponent;
  let fixture: ComponentFixture<SubVerticalCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubVerticalCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubVerticalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
