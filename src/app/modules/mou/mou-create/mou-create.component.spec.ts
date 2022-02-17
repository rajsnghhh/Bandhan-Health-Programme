import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouCreateComponent } from './mou-create.component';

describe('MouCreateComponent', () => {
  let component: MouCreateComponent;
  let fixture: ComponentFixture<MouCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MouCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
