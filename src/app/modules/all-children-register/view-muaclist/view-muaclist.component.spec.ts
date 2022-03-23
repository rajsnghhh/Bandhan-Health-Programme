import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMuaclistComponent } from './view-muaclist.component';

describe('ViewMuaclistComponent', () => {
  let component: ViewMuaclistComponent;
  let fixture: ComponentFixture<ViewMuaclistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMuaclistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMuaclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
