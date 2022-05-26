import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHhSsRemapHomeComponent } from './user-hh-ss-remap-home.component';

describe('UserHhSsRemapHomeComponent', () => {
  let component: UserHhSsRemapHomeComponent;
  let fixture: ComponentFixture<UserHhSsRemapHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHhSsRemapHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHhSsRemapHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
