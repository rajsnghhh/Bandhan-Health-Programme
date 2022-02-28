import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamilyInfoCreateComponent } from './family-info-create/family-info-create.component';

const routes: Routes = [
  { path: 'create', component: FamilyInfoCreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyInfoRoutingModule { }
