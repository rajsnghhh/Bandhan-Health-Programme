import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubVerticalViewComponent } from './sub-vertical-view.component';

describe('SubVerticalViewComponent', () => {
  let component: SubVerticalViewComponent;
  let fixture: ComponentFixture<SubVerticalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubVerticalViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubVerticalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
