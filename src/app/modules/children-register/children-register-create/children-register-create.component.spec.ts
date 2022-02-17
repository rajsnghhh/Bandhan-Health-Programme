import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildrenRegisterCreateComponent } from './children-register-create.component';

describe('ChildrenRegisterCreateComponent', () => {
  let component: ChildrenRegisterCreateComponent;
  let fixture: ComponentFixture<ChildrenRegisterCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenRegisterCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenRegisterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
