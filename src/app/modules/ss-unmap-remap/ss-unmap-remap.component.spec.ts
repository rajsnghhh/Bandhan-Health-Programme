import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsUnmapRemapComponent } from './ss-unmap-remap.component';

describe('SsUnmapRemapComponent', () => {
  let component: SsUnmapRemapComponent;
  let fixture: ComponentFixture<SsUnmapRemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsUnmapRemapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsUnmapRemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
