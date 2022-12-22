import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthForumComponent } from './health-forum.component';

const routes: Routes = [{ path: '', component: HealthForumComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthForumRoutingModule { }
