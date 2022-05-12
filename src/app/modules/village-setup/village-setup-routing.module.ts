import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VillageSetupComponent } from './village-setup.component';

const routes: Routes = [{ path: '', component: VillageSetupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillageSetupRoutingModule { }
