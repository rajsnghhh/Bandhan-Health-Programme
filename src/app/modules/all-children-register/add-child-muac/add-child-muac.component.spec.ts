import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChildMuacComponent } from './add-child-muac.component';

describe('AddChildMuacComponent', () => {
  let component: AddChildMuacComponent;
  let fixture: ComponentFixture<AddChildMuacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChildMuacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChildMuacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
