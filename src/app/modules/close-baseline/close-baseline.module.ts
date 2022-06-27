import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloseBaselineRoutingModule } from './close-baseline-routing.module';
import { CloseBaselineComponent } from './close-baseline.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderModule } from '../shared/loader/loader.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [CloseBaselineComponent],
  imports: [
    CommonModule,
    CloseBaselineRoutingModule,
    ReactiveFormsModule,
    LoaderModule,
    NgxPaginationModule
  ]
})
export class CloseBaselineModule { }
