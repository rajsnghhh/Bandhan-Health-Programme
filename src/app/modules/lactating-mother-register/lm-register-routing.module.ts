import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LmViewComponent } from './lm-view/lm-view.component';

const routes: Routes = [{ path: '', component: LmViewComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LmRegisterRoutingModule { }
