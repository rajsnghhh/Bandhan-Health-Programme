import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistrictSetupComponent } from './district-setup.component';

const routes: Routes = [{ path: '', component: DistrictSetupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistrictSetupRoutingModule { }
