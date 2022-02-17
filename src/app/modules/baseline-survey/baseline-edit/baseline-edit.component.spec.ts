import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselineEditComponent } from './baseline-edit.component';

describe('BaselineEditComponent', () => {
  let component: BaselineEditComponent;
  let fixture: ComponentFixture<BaselineEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaselineEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaselineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
