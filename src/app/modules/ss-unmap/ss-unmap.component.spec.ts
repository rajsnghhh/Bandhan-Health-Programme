import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsUnmapComponent } from './ss-unmap.component';

describe('SsUnmapComponent', () => {
  let component: SsUnmapComponent;
  let fixture: ComponentFixture<SsUnmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsUnmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsUnmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
