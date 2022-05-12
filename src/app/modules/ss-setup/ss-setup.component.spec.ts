import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsSetupComponent } from './ss-setup.component';

describe('SsSetupComponent', () => {
  let component: SsSetupComponent;
  let fixture: ComponentFixture<SsSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
