import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHhSsRemapHomeComponent } from './user-hh-ss-remap-home/user-hh-ss-remap-home.component';

const routes: Routes = [{ path: '', component: UserHhSsRemapHomeComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserHhSsRemapRoutingModule { }
