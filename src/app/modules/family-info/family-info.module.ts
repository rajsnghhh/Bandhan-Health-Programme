import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyInfoRoutingModule } from './family-info-routing.module';
import { FamilyInfoCreateComponent } from './family-info-create/family-info-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FamilyInfoCreateComponent],
  imports: [
    CommonModule,
    FamilyInfoRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class FamilyInfoModule { }
