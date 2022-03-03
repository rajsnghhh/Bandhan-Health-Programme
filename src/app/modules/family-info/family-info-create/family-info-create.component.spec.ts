import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FamilyInfoCreateComponent } from './family-info-create.component';

describe('FamilyInfoCreateComponent', () => {
  let component: FamilyInfoCreateComponent;
  let fixture: ComponentFixture<FamilyInfoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyInfoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyInfoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
