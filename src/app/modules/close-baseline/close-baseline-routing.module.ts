import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CloseBaselineComponent } from './close-baseline.component';

const routes: Routes = [{ path: '', component: CloseBaselineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CloseBaselineRoutingModule { }
