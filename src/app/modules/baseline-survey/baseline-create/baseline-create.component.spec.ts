import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaselineCreateComponent } from './baseline-create.component';

describe('BaselineCreateComponent', () => {
  let component: BaselineCreateComponent;
  let fixture: ComponentFixture<BaselineCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaselineCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaselineCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
