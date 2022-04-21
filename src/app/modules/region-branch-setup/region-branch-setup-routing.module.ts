import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionBranchHomeComponent } from './region-branch-home/region-branch-home.component';

const routes: Routes = [{ path: '', component: RegionBranchHomeComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionBranchSetupRoutingModule { }
