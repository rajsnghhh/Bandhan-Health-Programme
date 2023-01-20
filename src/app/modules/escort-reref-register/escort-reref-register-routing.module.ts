import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscortRerefRegisterComponent } from './escort-reref-register.component';

const routes: Routes = [{ path: '', component: EscortRerefRegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscortRerefRegisterRoutingModule { }
