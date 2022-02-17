import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubVerticalCreateComponent } from './sub-vertical-create/sub-vertical-create.component';
import { SubVerticalPendingComponent } from './sub-vertical-pending/sub-vertical-pending.component';
import { SubVerticalViewComponent } from './sub-vertical-view/sub-vertical-view.component';

import { SubVerticalComponent } from './sub-vertical.component';

const routes: Routes = [

  { path: '', component: SubVerticalViewComponent },
  { path: 'create/:subVerticalMasterId', component: SubVerticalCreateComponent },
  { path: 'create', component:SubVerticalCreateComponent},
  { path: 'pending', component: SubVerticalPendingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubVerticalRoutingModule { }
