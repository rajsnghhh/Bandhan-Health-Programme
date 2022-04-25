import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockHomeComponent } from './block-home.component';

describe('BlockHomeComponent', () => {
  let component: BlockHomeComponent;
  let fixture: ComponentFixture<BlockHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
