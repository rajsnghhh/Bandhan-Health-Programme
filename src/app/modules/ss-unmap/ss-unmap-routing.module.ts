import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SsUnmapComponent } from './ss-unmap.component';

const routes: Routes = [{ path: '', component: SsUnmapComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SsUnmapRoutingModule { }
