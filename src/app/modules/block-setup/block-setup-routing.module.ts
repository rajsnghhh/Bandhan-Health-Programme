import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockHomeComponent } from './block-home/block-home.component';

const routes: Routes = [{ path: '', component: BlockHomeComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockSetupRoutingModule { }
