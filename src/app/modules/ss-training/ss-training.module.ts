import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SsTrainingRoutingModule } from './ss-training-routing.module';
import { SsTrainingComponent } from './ss-training.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderModule } from '../shared/loader/loader.module';

@NgModule({
  declarations: [SsTrainingComponent],
  imports: [
    CommonModule,
    SsTrainingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    LoaderModule
  ]
})
export class SsTrainingModule { }
