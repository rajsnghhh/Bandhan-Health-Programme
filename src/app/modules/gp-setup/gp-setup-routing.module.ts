import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GpHomeComponent } from './gp-home/gp-home.component';

const routes: Routes = [{ path: '', component: GpHomeComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GpSetupRoutingModule { }
