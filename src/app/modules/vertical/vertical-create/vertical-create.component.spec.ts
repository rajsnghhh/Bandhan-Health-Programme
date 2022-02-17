import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalCreateComponent } from './vertical-create.component';

describe('VerticalCreateComponent', () => {
  let component: VerticalCreateComponent;
  let fixture: ComponentFixture<VerticalCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
