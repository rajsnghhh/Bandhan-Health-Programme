import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyActivityRecordComponent } from './daily-activity-record.component';

const routes: Routes = [{ path: '', component: DailyActivityRecordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyActivityRecordRoutingModule { }
