import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemapUserHhComponent } from './remap-user-hh.component';

const routes: Routes = [{ path: '', component: RemapUserHhComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemapUserHhRoutingModule { }
