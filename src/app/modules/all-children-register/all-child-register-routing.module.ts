import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllChildRegisterComponent } from './all-child-register.component';

const routes: Routes = [{ path: '', component: AllChildRegisterComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllChildRegisterRoutingModule { }
