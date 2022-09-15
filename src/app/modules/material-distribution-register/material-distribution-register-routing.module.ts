import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialDistributionRegisterComponent } from './material-distribution-register.component';

const routes: Routes = [{ path: '', component: MaterialDistributionRegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialDistributionRegisterRoutingModule { }
