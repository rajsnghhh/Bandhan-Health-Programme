import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BranchVillageMapComponent } from './branch-village-map.component';

const routes: Routes = [{ path: '', component: BranchVillageMapComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchVillageMapRoutingModule { }
