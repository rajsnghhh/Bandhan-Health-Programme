import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSetupFormComponent } from './block-setup-form.component';

describe('BlockSetupFormComponent', () => {
  let component: BlockSetupFormComponent;
  let fixture: ComponentFixture<BlockSetupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockSetupFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockSetupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
