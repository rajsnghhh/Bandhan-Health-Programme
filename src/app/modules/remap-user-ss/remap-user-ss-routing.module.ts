import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemapUserSsComponent } from './remap-user-ss.component';

const routes: Routes = [{ path: '', component: RemapUserSsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemapUserSsRoutingModule { }
