import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PemRegisterCreateComponent } from './pem-register-create/pem-register-create.component';

const routes: Routes = [{ path: 'create', component: PemRegisterCreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PemRegisterRoutingModule { }
