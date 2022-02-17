import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonorCreateComponent } from './donor-create/donor-create.component';
import { DonorComponent } from './donor.component';

const routes: Routes = [
  {
    path: '', component: DonorComponent, children: [
      { path: 'edit/:id', component: DonorCreateComponent }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonorRoutingModule { }
