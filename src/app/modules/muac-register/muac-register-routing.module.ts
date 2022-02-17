import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuacRegisterCreateComponent } from './muac-register-create/muac-register-create.component';

const routes: Routes = [
  { path: 'create', component: MuacRegisterCreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MuacRegisterRoutingModule { }
