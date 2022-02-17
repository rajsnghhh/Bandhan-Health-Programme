import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerticalComponent } from './vertical.component';

const routes: Routes = [
  { path: '', component: VerticalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerticalRoutingModule { }
