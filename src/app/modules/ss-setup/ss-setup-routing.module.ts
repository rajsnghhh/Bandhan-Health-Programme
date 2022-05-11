import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SsSetupComponent } from './ss-setup.component';

const routes: Routes = [{ path: '', component: SsSetupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SsSetupRoutingModule { }
