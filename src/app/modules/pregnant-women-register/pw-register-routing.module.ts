import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PwRegisterComponent } from './pw-register/pw-register.component';

const routes: Routes = [{ path: '', component: PwRegisterComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PwRegisterRoutingModule { }
