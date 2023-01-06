import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyActivityRecordRoutingModule } from './daily-activity-record-routing.module';
import { DailyActivityRecordComponent } from './daily-activity-record.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderModule } from '../shared/loader/loader.module';


@NgModule({
  declarations: [DailyActivityRecordComponent],
  imports: [
    CommonModule,
    DailyActivityRecordRoutingModule,
    ReactiveFormsModule, LoaderModule
  ]
})
export class DailyActivityRecordModule { }
