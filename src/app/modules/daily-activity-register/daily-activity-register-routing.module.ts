import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyActivityRegisterComponent } from './daily-activity-register.component';

const routes: Routes = [{ path: '', component: DailyActivityRegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyActivityRegisterRoutingModule { }
