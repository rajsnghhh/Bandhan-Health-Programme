import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleAccessComponent } from './role-access.component';

const routes: Routes = [{ path: '', component: RoleAccessComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleAccessRoutingModule { }
