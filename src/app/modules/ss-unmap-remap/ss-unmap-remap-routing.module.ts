import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SsUnmapRemapComponent } from './ss-unmap-remap.component';

const routes: Routes = [{ path: '', component: SsUnmapRemapComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SsUnmapRemapRoutingModule { }
