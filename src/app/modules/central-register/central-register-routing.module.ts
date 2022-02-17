import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CentralRegisterCreateComponent } from './central-register-create/central-register-create.component';
import { CentralRegisterViewComponent } from './central-register-view/central-register-view.component';

const routes: Routes = [
  { path: 'view', component: CentralRegisterViewComponent },
  { path: 'create', component: CentralRegisterCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CentralRegisterRoutingModule { }
