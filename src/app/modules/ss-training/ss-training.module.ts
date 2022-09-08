import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SsTrainingRoutingModule } from './ss-training-routing.module';
import { SsTrainingComponent } from './ss-training.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ssTrainingPipe } from '../shared/ss-training-search.pipe';

@NgModule({
  declarations: [SsTrainingComponent, ssTrainingPipe],
  imports: [
    CommonModule,
    SsTrainingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class SsTrainingModule { }
