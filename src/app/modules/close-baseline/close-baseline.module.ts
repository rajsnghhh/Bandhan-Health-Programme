import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloseBaselineRoutingModule } from './close-baseline-routing.module';
import { CloseBaselineComponent } from './close-baseline.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CloseBaselineComponent],
  imports: [
    CommonModule,
    CloseBaselineRoutingModule, ReactiveFormsModule
  ]
})
export class CloseBaselineModule { }
