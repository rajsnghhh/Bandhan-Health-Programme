import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SsTrainingComponent } from './ss-training.component';

const routes: Routes = [{ path: '', component: SsTrainingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SsTrainingRoutingModule { }
