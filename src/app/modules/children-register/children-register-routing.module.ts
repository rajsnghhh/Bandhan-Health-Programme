import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildrenRegisterCreateComponent } from './children-register-create/children-register-create.component';

const routes: Routes = [
  { path: 'create', component: ChildrenRegisterCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildrenRegisterRoutingModule { }
